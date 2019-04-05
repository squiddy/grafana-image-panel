export interface Options {
  imageUrl: string;
  updateInterval: number;
}

export const defaults: Options = {
  imageUrl: "",
  updateInterval: 60 * 5
};
