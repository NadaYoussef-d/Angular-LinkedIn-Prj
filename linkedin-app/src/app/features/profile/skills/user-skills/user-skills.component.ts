import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/_model/user";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-user-skills",
  templateUrl: "./user-skills.component.html",
  styleUrls: ["./user-skills.component.css"]
})
export class UserSkillsComponent implements OnInit {
  user: User = { skills: ["presentation!!"] };

  userService: UserService;
  constructor(private userservice: UserService) {}

  ngOnInit() {}
  // onSubmit(skillForm: NgForm) {
  //   // this.userService.add(this.user);
  //   console.log("skillForm");
  // }
  onSubmit(skillName) {
    const user: User = { skills: skillName };
    console.log(user);
    this.userService.add(user);
  }
}
