import * as React from "react";
import { Table } from "evergreen-ui";
import { inject, observer } from "mobx-react";

interface Props {
}

@inject()
@observer
class ImportForm extends React.Component<Props, {}> {

  render() {
    return (
      <Table>

      </Table>
    );
  }
}

export default ImportForm;
