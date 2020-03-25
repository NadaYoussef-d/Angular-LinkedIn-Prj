import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../../_model/user";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.css"]
})
export class PersonalInfoComponent implements OnInit {
  @Input()
  user: User;
  editProfileFrom: FormGroup;
  constructor() {}

  ngOnInit() {
    console.log(this.user);
    this.editProfileFrom = new FormGroup({
      firstName: new FormControl(this.user.firstName),
      lastName: new FormControl(this.user.lastName),
      jobTitle: new FormControl(this.user.jobTitle),
      jobAndEducation: new FormControl(this.user.jobAndEducation),
      address: new FormControl(this.user.address)
    });
  }

  edit(text: InnerHTML) {}
}
