import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../../_model/user";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.css"]
})
export class PersonalInfoComponent implements OnInit {
  @Input()
  user: User;
  constructor() {}

  ngOnInit() {
    console.log(this.user);
  }
}
