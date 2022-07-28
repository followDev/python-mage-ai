{% extends "transformers/transformer_actions/action.jinja" %}
{% block action %}
    """
    Execute Transformer Action: ActionType.DIFF

    Calculates difference from previous row along column.
    """
    action = build_transformer_action(
        df,
        action_type=ActionType.DIFF,
        arguments=[],  # Specify at most one column to compute difference with
        axis=Axis.COLUMN,
        outputs=[{'uuid': 'new_diff_column', 'column_type': 'number_with_decimals'}],
    )
{% endblock %}
