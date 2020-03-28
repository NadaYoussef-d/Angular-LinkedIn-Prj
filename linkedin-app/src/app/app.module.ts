import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./cores/header/header.component";
import { ErrorPageComponent } from "./cores/error-page/error-page.component";
import { FooterComponent } from "./cores/footer/footer.component";
import { HomeComponent } from "./features/home/home.component";
import { ProfileComponent } from "./features/profile/profile.component";
import { PostAddComponent } from "./features/post/post-add/post-add.component";
import { PostListingComponent } from "./features/post/post-listing/post-listing.component";
import { UserSkillsComponent } from "./features/profile/skills/user-skills/user-skills.component";
import { UserAboutComponent } from "./features/profile/about/user-about/user-about.component";
import { UserEducationComponent } from "./features/profile/Education/user-education/user-education.component";
import { PersonalInfoComponent } from "./features/profile/PersonalInfo/personal-info/personal-info.component";
import { UserService } from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    PostAddComponent,
    PostListingComponent,
    UserSkillsComponent,
    UserAboutComponent,
    UserEducationComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home/:id", component: HomeComponent },
      { path: "profile/:id", component: ProfileComponent }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
