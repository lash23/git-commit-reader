import { ICommitAuthor } from "./ICommitAuthor";

export interface ICommitter extends ICommitAuthor {
  avatar_url?: string;
  html_url?: string;
  login?: string;
}