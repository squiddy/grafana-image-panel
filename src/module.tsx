import React, { PureComponent } from "react";
import { PanelProps, ReactPanelPlugin } from "@grafana/ui";

export class ImagePanel extends PureComponent<PanelProps> {
  render() {
    return <div>Hello from my panel</div>;
  }
}

export const reactPanel = new ReactPanelPlugin(ImagePanel);
