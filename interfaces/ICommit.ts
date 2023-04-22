import { ICommitAuthor } from "./ICommitAuthor";
import { ICommitter } from "./ICommitter";

export interface ICommit {
  author: ICommitAuthor;
  committer: ICommitter;
  message: string;
  url: string;
  comment_count: number;
}