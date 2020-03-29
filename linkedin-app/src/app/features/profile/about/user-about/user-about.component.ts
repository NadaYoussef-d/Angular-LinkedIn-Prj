import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from './../../../../_model/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit {
  @ViewChild ('closebutton',{static:false}) closebutton;
 @ViewChild('SpanAboutContent',{static:false}) SpanAboutContent;
 @Input()user:User;
 userService:UserService;

 
  constructor() { 
  
  
  }

  ngOnInit() {
  }


  onSubmitAbout(textAreaAbout:HTMLTextAreaElement ){

 this.user.about=textAreaAbout.value;

 (this.SpanAboutContent.nativeElement as HTMLSpanElement).textContent=this.user.about;

this.closebutton.nativeElement.click();
 console.log(this.user)
 this.userService.update(this.user);
  }
}
