import { ICommit } from "./ICommit";

export interface IListCommitItem {
  sha: string;
  node_id: string;
  commit: ICommit;
  url: string;
  html_url: string;
  comments_url: string;
}