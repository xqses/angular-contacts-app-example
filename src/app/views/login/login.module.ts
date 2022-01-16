import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/core/modules/shared.module";
import { UserSocketService } from "./services/user-socket.service";
import { UserService } from "./services/user.service";
import { UserEventTypes } from "@app/core/models/user.events";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [],
  providers: [UserEventTypes, UserService, UserSocketService],
})
export class LoginModule {}
