import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { User } from "@app/core/models";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-index",
  templateUrl: "./login-index.component.html",
  styleUrls: ["./login-index.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginIndexComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  createUser(user: User) {
    this.router.navigate(["/user", user.id, "user"]);
  }
}
