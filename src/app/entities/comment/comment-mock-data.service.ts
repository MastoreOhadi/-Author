import {Injectable} from '@angular/core';
import {Observable, Subscription, of} from "rxjs";
import {MockApiService} from "../../shared/mock-api.service";
import {Comment} from "./comment.model";
import {COMMENTS} from "./mock-comment";
import {DecimalPipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CommentMockDataService extends MockApiService<Comment> {
  authorId: number = 0;

  constructor(override pipe: DecimalPipe) {
    super(pipe);
    this.setData(COMMENTS);
  }

  public setAuthorId(authorId: number) {
    this.authorId = authorId;
  }

  override whereData() {
    return (item) => item.authorId == this.authorId;
  }

  override searche(searchText: string) {
    return (item) => true;
  }
}
