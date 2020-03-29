import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/user.service";
import { User } from "src/app/_model/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  userid: number;
  user: User;
  ngOnInit() {
    this.userid = +this.route.snapshot.params["id"];
    this.user = this.userService.getById(this.userid);
    console.log(this.user);
  }
}
