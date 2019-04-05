import React, { PureComponent } from "react";
import { PanelProps } from "@grafana/ui";

export class ImagePanel extends PureComponent<PanelProps> {
  render() {
    return <div>Hello from my panel</div>;
  }
}