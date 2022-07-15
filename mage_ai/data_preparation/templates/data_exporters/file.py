from mage_ai.io.file import FileIO
from pandas import DataFrame

if 'data_exporter' not in globals():
    from mage_ai.data_preparation.decorators import data_exporter


@data_exporter
def export_data_to_file(df: DataFrame) -> None:
    """
    Template for exporting data to filesystem.
    """
    filepath = 'path/to/write/dataframe/to.csv'
    FileIO(filepath).export(df)
