import React, { FunctionComponent, useEffect, useState } from "react";
import { Checks } from "./checks";

interface Props {
  request: () => Promise<number>;
  title: string;

  children?: React.ReactNode;
}

export const APICheck: FunctionComponent<Props> = ({
  request,
  ...props
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    request()
      .then((status) => {
        if (status !== 200) {
          setFailure(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Checks {...{ ...props, loading, failure }} />;
};
