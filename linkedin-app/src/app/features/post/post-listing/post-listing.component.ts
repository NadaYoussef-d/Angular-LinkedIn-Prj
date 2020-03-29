import { Comment } from "./../../../_model/comment";
import { CommentService } from "./../comment.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.css"]
})
export class PostListingComponent implements OnInit {
  constructor(private commentService: CommentService) {}

  postsId: number[] = [12, 13];
  x: Comment[];
  // commentObj: { postId: number= 0, commentArr : Comment[]= [] };
  ngOnInit() {
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
