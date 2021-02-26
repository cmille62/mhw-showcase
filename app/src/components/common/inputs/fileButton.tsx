import React, { FunctionComponent } from "react";
import { Button } from "evergreen-ui";
import { BaseProps } from ".";

interface FileProps extends BaseProps {
  title: string;
  id?: string;
  accept: string;
  multiple?: boolean;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUploadButton: FunctionComponent<FileProps> = ({
  accept,
  onChange,
  id,
  title,
  multiple = false,
}: FileProps) => {
  const Id = id || title.replace(" ", "");
  return (
    <Button
      appearance="primary"
      fontSize={12}
      marginLeft="auto"
      marginBottom={10}
      onClick={() => {
        const button = document.getElementById(Id);
        button && button.click();
      }}
    >
      {title}
      <input
        id={Id}
        type="file"
        {...{ multiple, accept }}
        style={{ display: "none" }}
        onChange={(event) => onChange(event)}
      />
    </Button>
  );
};
