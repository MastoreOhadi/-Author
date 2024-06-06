import {DisplayMember} from "../display-member";

export interface  IComment{
  id: number,
  authorId:number,
  user: string,
  title: string,
  createdOn: Date,
}
export class Comment implements  IComment{
  id: number;
  authorId:number;
  user: string;
  title: string;
  createdOn: Date;

  constructor(comment: Comment) {
    // Object.assign(this, props);
    this.id=comment.id;
    this.authorId=comment.authorId;
    this.user=comment.user;
    this.title=comment.title;
    this.createdOn=comment.createdOn;
  }
}
export const DISPLAY_MEMBERS : DisplayMember[]= [
  { id:1, name: 'user', type: 'string' },
  { id:2, name: 'title', type: 'string' },
  { id:3, name: 'createdOn', type: 'Date' },
]