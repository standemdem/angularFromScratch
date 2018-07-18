import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {CommentsService} from "./comments.service";
import {CommentModel} from "../models/comments.model";
import {filter, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  size: number;

  constructor(private commentsService: CommentsService) {
  }

  getComments$(): Observable<CommentModel[]> {
    return this.commentsService.getComments$()
      .pipe(
        tap(x => console.log('x', x)),
        map((comments: CommentModel[]) => comments
          .filter((comment: CommentModel) => comment.id < 25)),
        map((comments: CommentModel[]) => {
          this.size = comments.length;
          return comments;
        })
      )
      ;
  }
}
