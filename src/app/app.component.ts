import { Component, VERSION } from "@angular/core";
import { UsersService } from "./users.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "";
  constructor(private user: UsersService) {
    this.name = this.user.getData.name;
  }
}
