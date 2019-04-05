import React, { PureComponent } from "react";
import { PanelProps } from "@grafana/ui";
import { Options } from "../types";

interface Props extends PanelProps<Options> {}

export class ImagePanel extends PureComponent<Props> {
  render() {
    return (
      <img
        src={this.props.options.imageUrl}
        width={this.props.width}
        height="auto"
      />
    );
  }
}
