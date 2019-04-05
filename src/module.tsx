import { ReactPanelPlugin } from "@grafana/ui";
import { ImagePanel } from "./components/ImagePanel";

export const reactPanel = new ReactPanelPlugin(ImagePanel);