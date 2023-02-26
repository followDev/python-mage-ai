from mage_ai.api.errors import ApiError
from mage_ai.api.resources.GenericResource import GenericResource
from mage_ai.data_preparation.models.errors import FileExistsError
from mage_ai.data_preparation.models.file import File
from mage_ai.data_preparation.repo_manager import get_repo_path
from mage_ai.orchestration.db import safe_db_query
from typing import Dict


class FileResource(GenericResource):
    @classmethod
    @safe_db_query
    def collection(self, query, meta, user, **kwargs):
        return self.build_result_set(
            [File.get_all_files(get_repo_path())],
            user,
            **kwargs,
        )

    @classmethod
    @safe_db_query
    def create(self, payload: Dict, user, **kwargs) -> 'FileResource':
        dir_path = payload['dir_path']
        repo_path = get_repo_path()
        content = None

        if 'file' in payload:
            file = payload['file'][0]
            filename = file['filename']
            content = file['body']
        else:
            filename = payload['name']

        try:
            file = File.create(
                filename,
                dir_path,
                repo_path=repo_path,
                content=content,
                overwrite=payload.get('overwrite', False),
            )

            return self(file.to_dict(), user, **kwargs)
        except FileExistsError as err:
            error = ApiError.RESOURCE_INVALID.copy()
            error.update(dict(message=str(err)))
            raise ApiError(error)
