import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
   CommentDetailsComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
