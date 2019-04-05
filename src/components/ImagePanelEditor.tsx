import React, { PureComponent } from "react";
import { FormField, PanelOptionsGroup, PanelEditorProps } from "@grafana/ui";
import { Options } from "../types";

interface State {
  imageUrl: string;
  updateInterval: number;
}

export class ImagePanelEditor extends PureComponent<
  PanelEditorProps<Options>,
  State
> {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: props.options.imageUrl,
      updateInterval: props.options.updateInterval
    };
  }

  onUpdatePanel = () =>
    this.props.onChange({
      ...this.props.options,
      imageUrl: this.state.imageUrl,
      updateInterval: this.state.updateInterval
    });

  onImageUrlChange = ({ target }) => this.setState({ imageUrl: target.value });

  onUpdateIntervalChange = ({ target }) =>
    this.setState({ updateInterval: target.value });

  render() {
    const { imageUrl, updateInterval } = this.state;

    return (
      <>
        <PanelOptionsGroup>
          <div className="gf-form">
            <FormField
              label="Image url"
              labelWidth={12}
              inputWidth={25}
              value={imageUrl}
              onChange={this.onImageUrlChange}
              onBlur={this.onUpdatePanel}
            />
          </div>
          <div className="gf-form">
            <FormField
              label="Update interval (s)"
              labelWidth={12}
              inputWidth={25}
              value={updateInterval}
              onChange={this.onUpdateIntervalChange}
              onBlur={this.onUpdatePanel}
            />
          </div>
        </PanelOptionsGroup>
      </>
    );
  }
}
