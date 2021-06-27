import React, { FunctionComponent } from "react";
import { Heading, Pane } from "evergreen-ui";

import "./style.scss";

interface Props {

}

export const Header: FunctionComponent<Props> = () => {
    return (
        <Pane className="application-header">
            <Heading>Miller Hardware Showcase</Heading>
        </Pane>
    );
}