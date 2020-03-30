import { User } from "src/app/_model/user";
import { Post } from "./../../../_model/post";
import { Comment } from "./../../../_model/comment";
import { CommentService } from "./../comment.service";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/user.service";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.css"]
})
export class PostListingComponent implements OnInit {
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}
  @Input() post: Post;
  user: User;
  postsId: number[] = [12, 13];
  x: Comment[];
  comment: {};
  liked = false;
  addCommentClicked = false;

  ngOnInit() {
    this.user = this.userService.getById(this.post.userId);
    this.x = this.post.comment;
    console.log(this.x);
  }
  newLike() {
    this.liked = !this.liked;
    if (this.liked === true) {
      this.post.like += 1;
    } else {
      this.post.like -= 1;
    }
  }
  addNewComment(event, newComment: HTMLInputElement) {
    if (event.key === "Enter") {
      this.comment = {
        postId: this.post.postId,
        commentId: this.post.comment.length,
        userId: this.user.id,
        commentContent: newComment.value
      };
      this.post.comment.push(this.comment);
      newComment.value = "";
    }
  }
  addComment() {
    this.addCommentClicked = true;
  }
}
