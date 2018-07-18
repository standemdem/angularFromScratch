import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CommentModel} from "../models/comments.model";


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getComments$():Observable <CommentModel[]>{
    return this.httpClient.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments')
  }

}
