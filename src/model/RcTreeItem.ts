import { TreeItem } from "./TreeItem";

export class RcTreeItem implements TreeItem {
  key: string;
  title: string;
  children?: TreeItem[] | undefined;
}
