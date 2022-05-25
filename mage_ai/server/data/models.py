from data_cleaner.pipelines.base import BasePipeline
from data_cleaner.shared.hash import merge_dict
from numpyencoder import NumpyEncoder
from server.data.base import Model

import json
import os
import os.path
import pandas as pd

SAMPLE_SIZE = 20

# right now, we are writing the models to local files to reduce dependencies
class FeatureSet(Model):
    def __init__(self, id=None, df=None, name=None):
        super().__init__(id)

        try:
            metadata = self.metadata
        except:
            self.metadata = {}
            metadata = self.metadata
        
        if name is not None:
            metadata['name'] = name

        if self.pipeline is None:
            pipeline = Pipeline()
            metadata['pipeline_id'] = pipeline.id
            self.metadata = metadata

        if df is None:
            self._data = pd.read_parquet(os.path.join(self.dir, 'data.parquet'), engine='pyarrow')
        else:
            self.data = df

    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, df):
        df.to_parquet(os.path.join(self.dir, 'data.parquet'))
        self._data = df
    
    @property
    def metadata(self):
        return self.read_json_file('metadata.json')
    
    @metadata.setter
    def metadata(self, metadata):
        return self.write_json_file('metadata.json', metadata)

    @property
    def statistics(self):
        return self.read_json_file('statistics.json')
    
    @statistics.setter
    def statistics(self, metadata):
        return self.write_json_file('statistics.json', metadata)

    @property
    def insights(self):
        return self.read_json_file('insights.json')

    @insights.setter
    def insights(self, metadata):
        return self.write_json_file('insights.json', metadata)

    @property
    def suggestions(self):
        return self.read_json_file('suggestions.json')

    @suggestions.setter
    def suggestions(self, metadata):
        return self.write_json_file('suggestions.json', metadata)
    
    @property
    def pipeline(self):
        pipeline_id = self.metadata.get('pipeline_id')
        if pipeline_id is None:
            return None
        return Pipeline(id=pipeline_id)

    @property
    def sample_data(self):
        sample_size = SAMPLE_SIZE
        if self._data.size < sample_size:
            sample_size = len(self._data) 
        return self._data.sample(n=sample_size)

    def write_files(self, obj):
        if 'df' in obj:
            self.data = obj['df']
        if 'metadata' in obj:
            self.metadata = obj['metadata']
        if 'suggestions' in obj:
            self.suggestions = obj['suggestions']
        if 'statistics' in obj:
            self.statistics = obj['statistics']
        if 'insights' in obj:
            self.insights = obj['insights']

    # def column(self, column):
    #     column_dict = dict()
    #     with open(os.path.join(self.dir, f'columns/{column}/statistics.json')) as column_stats:
    #         column_dict['statistics'] = json.load(column_stats)
    #     with open(os.path.join(self.dir, f'columns/{column}/insights.json')) as column_insights:
    #         column_dict['insights'] = json.load(column_insights)
    #     return column_dict

    def to_dict(self, detailed=True):
        obj = dict(
            id=self.id,
            metadata=self.metadata,
        )
        if detailed:
            obj = merge_dict(obj, dict(
                pipeline=self.pipeline.to_dict(),
                sample_data=self.sample_data.to_dict(),
                statistics=self.statistics,
                insights=self.insights,
                suggestions=self.suggestions,
            ))
        return obj
        
class Pipeline(Model):
    def __init__(self, id=None, pipeline=None):
        super().__init__(id)
        if pipeline is not None:
            self.pipeline = pipeline
        else:
            self.pipeline = BasePipeline()
    
    @property
    def pipeline(self):
        actions = self.read_json_file('pipeline.json')
        return BasePipeline(actions=actions)

    @pipeline.setter
    def pipeline(self, pipeline):
        return self.write_json_file('pipeline.json', pipeline.actions)

    def to_dict(self, detailed=True):
        return dict(
            id=self.id,
            actions=self.pipeline.actions,
        )
