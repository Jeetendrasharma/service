import { Component, VERSION } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dat = []
  constructor(private user: UsersService) {
    this.user.getData.subscribe(data => {
      console.log(data);
      this.dat.push(data);
    });
  }
}
