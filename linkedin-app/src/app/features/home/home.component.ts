import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/_model/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
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
