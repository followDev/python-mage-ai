import { useMutation } from 'react-query';

import PrivateRoute from '@components/shared/PrivateRoute';
import Terminal from '@components/Terminal';
import api from '@api';
import { PipelineTypeEnum, PIPELINE_TYPE_TO_KERNEL_NAME } from '@interfaces/PipelineType';
import { onSuccess } from '@api/utils/response';

function TerminalPage() {
  const [interruptKernel] = useMutation(
    api.interrupt.kernels.useCreate(PIPELINE_TYPE_TO_KERNEL_NAME[PipelineTypeEnum.PYTHON]),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          onErrorCallback: (response, errors) => console.log({
            errors,
            response,
          }),
        },
      ),
    },
  );

  return (
    <Terminal
      interruptKernel={interruptKernel}
    />
  );
}

TerminalPage.getInitialProps = async () => ({});

export default PrivateRoute(TerminalPage);
