import {Component, OnInit} from '@angular/core';
import {CommentModel} from "../models/comments.model";
import {CommentsDataService} from "../service/comments-data.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  comments: CommentModel[];
  size: number = this.commentsDataService.size;

  constructor(private  commentsDataService: CommentsDataService) {
  }

  ngOnInit() {
    this.commentsDataService.getComments$()
      .pipe(
        map((comments: CommentModel[]) => {
          this.comments = comments;
          this.size = this.commentsDataService.size;
        })
      )
      .subscribe()
  }

  abuse(id) {
    console.log('id' + id);
  }

}
