import React, { FunctionComponent, useEffect, useState } from "react";
import { Dialog, Paragraph } from "evergreen-ui";

interface Props {
  shown: boolean;
  title: string;
  description: string;
  onDelete: () => void;
  onClose: () => void;
}

export const DeleteModal: FunctionComponent<Props> = ({
  shown,
  title,
  description,
  onDelete,
  onClose,
}: Props) => {
  const [internal, setInternal] = useState(shown);
  useEffect(() => setInternal(shown), [shown]);

  return (
    <Dialog
      title={title}
      isShown={internal}
      onConfirm={() => onDelete()}
      onCloseComplete={() => onClose()}
      confirmLabel="Delete"
      intent="danger"
    >
      <Paragraph>
        Are you sure you would like to delete {description}?
      </Paragraph>
      <Paragraph>Warning, this action is permanent.</Paragraph>
    </Dialog>
  );
};
