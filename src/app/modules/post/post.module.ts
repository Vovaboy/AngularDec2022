import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/components/user/user.component';
import { UsersComponent } from '../user/components/users/users.component';
import { UserDetailsComponent } from '../user/components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';



@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
