from mage_integrations.destinations.constants import COLUMN_TYPE_OBJECT
from mage_integrations.destinations.sql.utils import convert_column_type as convert_column_type_orig
from typing import Dict
import json


def convert_array(v: str, column_type_dict: Dict):
    item_type_converted = column_type_dict['item_type_converted']

    if 'JSONB' == item_type_converted.upper():
        arr = []
        for v2 in v:
            if v2:
                if type(v2) is dict:
                    v2 = json.dumps(v2)
            arr.append(v2)
        arr_joined = ', '.join([f"'{v2}'" for v2 in arr])
        value_final = f"ARRAY[{arr_joined}]::JSONB[]"
    else:
        value_final = [str(s).replace("'", "''") for s in v]
        strings_joined = ', '.join(value_final)
        value_final = f"'{{{strings_joined}}}'"

    return value_final


def convert_column_type(
    column_type: str,
    column_settings: Dict,
    **kwargs,
) -> str:
    if COLUMN_TYPE_OBJECT == column_type:
        return 'JSONB'

    return convert_column_type_orig(column_type, column_settings, **kwargs)
