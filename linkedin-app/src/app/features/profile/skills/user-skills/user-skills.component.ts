import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/_model/user";
import { UserService } from "src/app/user.service";
import { ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { from } from "rxjs";

@Component({
  selector: "app-user-skills",
  templateUrl: "./user-skills.component.html",
  styleUrls: ["./user-skills.component.css"]
})
export class UserSkillsComponent implements OnInit {
  User: User;
  userId: number;
  skills: String[];
  constructor(
    private route: ActivatedRoute,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.params["id"];
    this.User = this.userservice.getById(this.userId);
    console.log(this.userId);
    this.skills = this.User.skills;
  }
  // onSubmit(skillForm: NgForm) {
  //   // this.userService.add(this.user);
  //   console.log("skillForm");
  // }
  onSubmit(skillName) {
    console.log(this.User);
  }
}
