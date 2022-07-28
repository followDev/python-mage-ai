{% extends "transformers/transformer_actions/action.jinja" %}
{% block action %}
    """
    Execute Transformer Action: ActionType.SELECT
    """
    action = build_transformer_action(
        df,
        action_type=ActionType.SELECT,
        arguments=df.columns,  # Specify columns to select
        axis=Axis.COLUMN,
    )
{% endblock %}
