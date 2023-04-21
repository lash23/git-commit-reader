import { ICommitAuthor } from "./ICommitAuthor";
import { ICommiter } from "./ICommitter";

export interface ICommit {
  author: ICommitAuthor;
  committer: ICommiter;
  message: string;
  url: string;
  comment_count: number;
}