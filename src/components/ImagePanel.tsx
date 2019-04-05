import React, { PureComponent } from "react";
import { PanelProps, getTheme } from "@grafana/ui";
import { Options } from "../types";

interface Props extends PanelProps<Options> {}

interface State {
  lastModified: string;
  error: string;
  imageUrl: string;
}

export class ImagePanel extends PureComponent<Props, State> {
  timer: number;

  constructor(props) {
    super(props);

    this.state = {
      lastModified: null,
      error: null,
      imageUrl: null
    };
  }

  updateImage = () => {
    if (!this.props.options.imageUrl) {
      return;
    }

    fetch(this.props.options.imageUrl, {
      method: "head",
      mode: "cors"
    })
      .then(response => {
        if (response.status >= 400) {
          throw Error(response.statusText);
        }

        const lastModified = response.headers.get("last-modified");
        if (lastModified !== this.state.lastModified) {
          const url =
            this.props.options.imageUrl +
            "?" +
            new Date(this.state.lastModified).valueOf();

          this.setState({ lastModified, imageUrl: url, error: null });
        }
      })
      .catch((error: Error) =>
        this.setState({
          lastModified: null,
          imageUrl: null,
          error: error.message
        })
      );
  };

  startTimer = () => {
    this.timer = setInterval(
      this.updateImage,
      this.props.options.updateInterval * 1000
    );
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  componentDidMount() {
    this.updateImage();
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.options.updateInterval !== prevProps.options.updateInterval
    ) {
      this.stopTimer();
      this.startTimer();
    }
  }

  render() {
    if (!this.state.imageUrl) {
      return null;
    }

    if (this.state.error) {
      const theme = getTheme();
      return (
        <strong style={{ color: theme.colors.critical }}>
          Could not load image: {this.state.error}
        </strong>
      );
    }

    return (
      <img src={this.state.imageUrl} width={this.props.width} height="auto" />
    );
  }
}
