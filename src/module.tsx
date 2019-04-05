import { ReactPanelPlugin } from "@grafana/ui";
import { ImagePanel } from "./components/ImagePanel";
import { Options, defaults } from "./types";
import { ImagePanelEditor } from "./components/ImagePanelEditor";

export const reactPanel = new ReactPanelPlugin<Options>(ImagePanel);

reactPanel.setEditor(ImagePanelEditor);
reactPanel.setDefaults(defaults);
