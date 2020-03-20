import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./cores/header/header.component";
import { ErrorPageComponent } from "./cores/error-page/error-page.component";
import { FooterComponent } from "./cores/footer/footer.component";
import { HomeComponent } from "./features/home/home.component";
import { ProfileComponent } from "./features/profile/profile.component";
import { PostAddComponent } from './features/post/post-add/post-add.component';
import { PostListingComponent } from './features/post/post-listing/post-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    PostAddComponent,
    PostListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfileComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
