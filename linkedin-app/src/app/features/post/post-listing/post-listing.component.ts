import { User } from 'src/app/_model/user';
import { Post } from './../../../_model/post';
import { Comment } from "./../../../_model/comment";
import { CommentService } from "./../comment.service";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from 'src/app/user.service';

@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.css"]
})
export class PostListingComponent implements OnInit {
  constructor(private userService: UserService,
    private commentService: CommentService) {}
@Input() post: Post;
user:User
  postsId: number[] = [12, 13];
  x: Comment[];

  // commentObj: { postId: number= 0, commentArr : Comment[]= [] };
  ngOnInit() {
    this.user=this.userService.getById(this.post.userId)
    // for (let i = 0; i < this.postsId.length; i++) {
    //   // this.commentObj.postId = this.postsId[i];
    //   // this.commentObj.commentArr = this.commentService.getByPostId(
    //   //   this.postsId[i]
    //   // );

    //   this.x = [...this.commentService.getByPostId(this.postsId[i])];
    // }
    // console.log(this.x);
  }
}
