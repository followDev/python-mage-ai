from data_cleaner.cleaning_rules.base import BaseRule
from data_cleaner.column_type_detector import (
    CATEGORICAL_TYPES,
    COLUMN_TYPES,
    DATETIME,
    NUMBER_TYPES,
    STRING_TYPES
)
from data_cleaner.transformer_actions.constants import (
    ActionType,
    Axis,
    ImputationStrategy
)
import numpy as np
import pandas as pd


class TypeImputeSubRule():
    DATA_SM_UB = 100
    MAX_NULL_SEQ_LENGTH = 4

    def __init__(self,
        df,
        column_types,
        statistics,
        is_timeseries=False
    ):
        """
        Assumptions of TypeImputeSubRule
        1. df will not contain any empty strings - all empty strings are converted to null types.
        This is handled in ImputeValues.
        2. column_types will contain the correct type value
        3. Every column in df is of dtype object and the entries must be used to infer type.
        This is not always the case, but this assumption simplifies code
        """
        self.df = df
        self.df_columns = df.columns.tolist()
        self.column_types = column_types
        self.is_timeseries = is_timeseries
        self.statistics = statistics

    def accepted_dtypes(self):
        """
        Gets the list of dtypes this subrule accepts and checks
        """
        raise NotImplementedError(
            'Children of TypeImputeSubRule must override \'accepted_dtypes()\''
        )

    def evaluate(self, column):
        """
        Gets the imputation strategy for the given column
        """
        raise NotImplementedError(
            'Children of TypeImputeSubRule must override \'evaluate()\''
        )


class NumericalImputeSubRule(TypeImputeSubRule):
    ACCEPTED_DTYPES = NUMBER_TYPES
    SKEW_UB = 0.7
    AVG_OR_MED_EMPTY_UB = {
        'small': 0.3,
        'large': 0.5
    }

    def accepted_dtypes(self):
        return self.ACCEPTED_DTYPES
    
    def evaluate(self, column):
        """
        Rule:
        1. If there are no null entries, no suggestion
        2. If the dataset was identified as timeseries, suggest sequential imputation
        3. If the number of nonnull entries is sell than DATA_SM_UB, use the
           small dataset bound; else use the large dataset bound
        3a. If the null value rate of the column is greater than AVG_OR_MED_EMPTY_UB
           (which can vary for small vs large dataset), suggest no imputation (not enough values)
        3b. If null value rate is less that AVG_OR_MED_EMPTY_UB and skew is less than SKEW_UB
           suggest imputing with mean value; else impute with median value
        """
        if self.statistics[f'{column}/null_value_rate'] == 0:
            return ImputationStrategy.NOOP
        elif (self.is_timeseries and 
              self.statistics[f'{column}/max_null_seq'] <= self.MAX_NULL_SEQ_LENGTH and 
              self.df[column].notna().iloc[0]):
            return ImputationStrategy.SEQ
        else:
            if self.statistics[f'{column}/count']  <= self.DATA_SM_UB:
                avg_or_med_empty_ub = self.AVG_OR_MED_EMPTY_UB['small']
            else:
                avg_or_med_empty_ub = self.AVG_OR_MED_EMPTY_UB['large']
            if self.statistics[f'{column}/null_value_rate']  <= avg_or_med_empty_ub:
                if abs(self.df[column].skew()) < self.SKEW_UB:
                    return ImputationStrategy.AVERAGE
                else:
                    return ImputationStrategy.MEDIAN
        return ImputationStrategy.NOOP


class CategoricalImputeSubRule(TypeImputeSubRule):
    ACCEPTED_DTYPES = CATEGORICAL_TYPES
    RAND_EMPTY_UB = 0.3
    MODE_PROP_LB = 0.4
    
    def accepted_dtypes(self):
        return self.ACCEPTED_DTYPES

    def evaluate(self, column):
        """
        Rule:
        1. If there are no null entries, no suggestion
        2. If the dataset was identified as timeseries, suggest sequential imputation
        3. Else, if more than MODE_PROP_LB of nonnull entries are a single value, use
           imputation with mode 
        4. Else, if less than RAND_EMPTY_UB ratio of entries are null, use random imputation
        5. Else suggest no imputation (no good fit)
        """
        if self.statistics[f'{column}/null_value_rate'] == 0:
            return ImputationStrategy.NOOP
        elif (self.is_timeseries and 
              self.statistics[f'{column}/max_null_seq'] <= self.MAX_NULL_SEQ_LENGTH and 
              self.df[column].notna().iloc[0]):
            return ImputationStrategy.SEQ
        elif self.statistics[f'{column}/mode_ratio'] >= self.MODE_PROP_LB:
            return ImputationStrategy.MODE
        elif self.statistics[f'{column}/null_value_rate'] <= self.RAND_EMPTY_UB:
            return ImputationStrategy.RANDOM
        return ImputationStrategy.NOOP


class DateTimeImputeSubRule(TypeImputeSubRule):
    ACCEPTED_DTYPES = frozenset((DATETIME,))

    def accepted_dtypes(self):
        return self.ACCEPTED_DTYPES
    
    def evaluate(self, column):
        """
        Rule:
        1. If there are no null entries, no suggestion
        2. If the dataset was identified as timeseries, suggest sequential imputation
        3. Else suggest no imputation (no good fit)
        """
        if self.statistics[f'{column}/null_value_rate'] == 0:
            return ImputationStrategy.NOOP
        elif (self.is_timeseries and
              self.statistics[f'{column}/max_null_seq'] <= self.MAX_NULL_SEQ_LENGTH and 
              self.df[column].notna().iloc[0]):
            return ImputationStrategy.SEQ
        else:
            return ImputationStrategy.NOOP


class StringImputeSubRule(TypeImputeSubRule):
    ACCEPTED_DTYPES = frozenset(STRING_TYPES)
    RAND_EMPTY_UB = 0.3
    MODE_PROP_LB = 0.4

    def accepted_dtypes(self):
        return self.ACCEPTED_DTYPES
    
    def evaluate(self, column):
        """
        Rule:
        1. If there are no null entries, no suggestion
        2. If the dataset was identified as timeseries, suggest sequential imputation
        3. Else, if more than MODE_PROP_LB of nonnull entries are a single value, use
           imputation with mode 
        4. Else, if less than RAND_EMPTY_UB ratio of entries are null, use random imputation
        5. Else suggest no imputation (no good fit)
        """
        if self.statistics[f'{column}/null_value_rate']  == 0:
            return ImputationStrategy.NOOP
        if (self.is_timeseries and 
            self.statistics[f'{column}/max_null_seq']  <= self.MAX_NULL_SEQ_LENGTH and 
            self.df[column].notna().iloc[0]):
            return ImputationStrategy.SEQ
        elif self.statistics[f'{column}/mode_ratio'] >= self.MODE_PROP_LB:
            return ImputationStrategy.MODE
        elif self.statistics[f'{column}/null_value_rate']  <= self.RAND_EMPTY_UB:
            return ImputationStrategy.RANDOM
        return ImputationStrategy.NOOP


class ImputeValues(BaseRule):
    RULESET = (
        CategoricalImputeSubRule,
        DateTimeImputeSubRule,
        NumericalImputeSubRule,
        StringImputeSubRule
    )
    ROW_KEPT_LB = 0.7
    TIMESERIES_NULL_RATIO_MAX = 0.1

    def __init__(self, df, column_types, statistics):
        super().__init__(df, column_types, statistics)
        self.action_constructor = ImputeActionConstructor(
            self.df, 
            self.column_types, 
            self._build_transformer_action_suggestion
        )
        self.exact_dtypes = self.get_exact_dtypes()
        self.strategy_cache = {
            ImputationStrategy.AVERAGE: {'entries': []},
            ImputationStrategy.MEDIAN: {'entries': []},
            ImputationStrategy.MODE: {'entries': []},
            ImputationStrategy.NOOP: {'entries': []},
            ImputationStrategy.RANDOM: {'entries': []},
            ImputationStrategy.ROW_RM: {'entries': []},
            ImputationStrategy.SEQ: {'entries': []}
        }
        if self.statistics['is_timeseries']:
            self.is_timeseries = True
            self.strategy_cache[ImputationStrategy.SEQ]['timeseries_index']\
                = self.statistics['timeseries_index']
        else:
            self.is_timeseries = False
        self.hydrate_rules()

    def build_suggestions(self):
        suggestions = []
        if len(self.strategy_cache[ImputationStrategy.ROW_RM]['entries']) != 0:
            strategy_cache_entry = self.strategy_cache[ImputationStrategy.ROW_RM]
            suggestions.append(
                self.action_constructor(ImputationStrategy.ROW_RM, strategy_cache_entry)
            )
        else:
            for strategy in self.strategy_cache:
                strategy_cache_entry = self.strategy_cache[strategy]
                if strategy != ImputationStrategy.NOOP and len(strategy_cache_entry['entries']) != 0:
                    suggestions.append(
                        self.action_constructor(strategy, strategy_cache_entry)
                    )
        return suggestions

    def evaluate(self):
        if self.df.empty:
            return []
        null_mask = self.df.isna().any(axis=1)
        ratio_rows_kept = len(self.df[~null_mask]) / len(self.df)
        if ratio_rows_kept == 1:
            self.strategy_cache[ImputationStrategy.NOOP]['entries'].extend(self.df_columns)
        elif ratio_rows_kept >= self.ROW_KEPT_LB:
            indices = self.df[null_mask].index
            self.strategy_cache[ImputationStrategy.ROW_RM]['entries'].extend(indices)
        else:
            for column in self.df_columns:
                dtype = self.column_types[column]
                rule = self.rule_map[dtype]
                self.strategy_cache[rule.evaluate(column)]['entries'].append(column)
        return self.build_suggestions()

    def get_exact_dtypes(self):
        def _get_exact_dtype(column):
            dropped = self.df[column].dropna(axis=0)
            try:
                return type(dropped.iloc[0])
            except IndexError:
                return None
        exact_dtypes = {column : _get_exact_dtype(column) for column in self.df_columns}
        return exact_dtypes

    def hydrate_rules(self):
        self.rules = list(
            map(
                lambda x: x(
                    self.df,
                    self.column_types,
                    self.statistics,
                    self.is_timeseries
                ),
                self.RULESET
            )
        )

        self.rule_map = {}
        for dtype in COLUMN_TYPES:
            rule_iterator = iter(self.rules)
            curr_rule = next(rule_iterator)
            while dtype not in curr_rule.accepted_dtypes():
                try:
                   curr_rule = next(rule_iterator)
                except StopIteration:
                    raise RuntimeError(f'No rule found to handle imputation of type {dtype}')
            self.rule_map[dtype] = curr_rule

class ImputeActionConstructor():
    def __init__(self, df, column_types, action_builder):
        self.df = df
        self.df_columns = df.columns.tolist()
        self.column_types = column_types
        self.action_builder = action_builder

    def __call__(self, strategy, strategy_cache_entry):
        return self.construct_suggestion_from_strategy(strategy, strategy_cache_entry)

    def construct_suggestion_from_strategy(
        self,
        strategy,
        strategy_cache_entry
    ):
        title = 'Fill in missing values'
        message = ''
        action_type = None
        action_arguments = []
        action_code = ''
        action_options = {}
        action_variables = {}
        axis = None
        outputs = []

        if strategy == ImputationStrategy.AVERAGE:
            message = 'The following columns have null-valued entries and '\
                      'the distribution of remaining values is approximately symmetric: '\
                      f'{strategy_cache_entry["entries"]}. ' \
                      'Suggested: fill null values with the average value from each column.'
            action_arguments = strategy_cache_entry['entries']
            action_type = ActionType.IMPUTE
            axis = Axis.COLUMN
            action_options = {'strategy': strategy}
            action_variables = self.__construct_action_variables(strategy_cache_entry['entries'])
        elif strategy == ImputationStrategy.MEDIAN:
            message = 'The following columns have null-valued entries and '\
                      'the distribution of remaining values is skewed: ' \
                      f'{strategy_cache_entry["entries"]}. ' \
                      'Suggested: fill null values with the median value from each column.'
            action_arguments = strategy_cache_entry['entries']
            action_type = ActionType.IMPUTE
            axis = Axis.COLUMN
            action_options = {'strategy': strategy}
            action_variables = self.__construct_action_variables(strategy_cache_entry['entries'])
        elif strategy == ImputationStrategy.MODE:
            message = 'The following columns have null valued entries and '\
                      'a large proportion of entries are a single value: '\
                      f'{strategy_cache_entry["entries"]}. ' \
                      'Suggested: fill null values with this most frequent value.'
            action_arguments = strategy_cache_entry['entries']
            action_type = ActionType.IMPUTE
            axis = Axis.COLUMN
            action_options = {'strategy': 'mode'}
            action_variables = self.__construct_action_variables(strategy_cache_entry['entries'])
        elif strategy == ImputationStrategy.RANDOM:
            message = 'The following columns have null-valued entries and are categorical: '\
                      f'{strategy_cache_entry["entries"]}. ' \
                      'Suggested: fill null values with a randomly sampled not null value.'
            action_arguments = strategy_cache_entry['entries']
            action_type = ActionType.IMPUTE
            axis = Axis.COLUMN
            action_options = {'strategy': strategy}
            action_variables = self.__construct_action_variables(strategy_cache_entry['entries'])
        elif strategy == ImputationStrategy.ROW_RM:
            title = 'Remove rows with missing entries'
            message = 'The rows at the following indices have null values: '\
                      f'{strategy_cache_entry["entries"]}. ' \
                      'Suggested: remove these rows to remove null values from the dataset.'
            action_arguments = self.df_columns
            action_type = ActionType.FILTER
            axis = Axis.ROW
            action_variables = self.__construct_action_variables(self.df_columns)
            action_code = ' and '.join(map(lambda name: f'{name} != null', self.df_columns))
        elif strategy == ImputationStrategy.SEQ:
            message = 'The following columns have null-valued entries which '\
                      'may be part of timeseries data: '\
                      f'{strategy_cache_entry["entries"]}. ' \
                      'Suggested: fill null values with previously occurring value in timeseries.'
            action_arguments = strategy_cache_entry['entries']
            action_type = ActionType.IMPUTE
            axis = Axis.COLUMN
            action_options = {
                'strategy': strategy,
                'timeseries_index': strategy_cache_entry['timeseries_index']
            }
            action_variables = self.__construct_action_variables(strategy_cache_entry['entries'])

        return self.action_builder(
            title,
            message,
            action_type,
            action_arguments,
            action_code,
            action_options,
            action_variables,
            axis,
            outputs
        )

    def __construct_action_variables(self, columns):
        variable_set = {}
        for column_name in columns:
            variable_set[column_name] = {
                'feature': {
                    'column_type': self.column_types[column_name],
                    'uuid': column_name,
                },
                'type': 'feature',
            }
        return variable_set
