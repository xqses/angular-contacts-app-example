import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { environment } from "@app/env";
import { UserEventTypes } from "@app/core/models/user.events";
import { User } from "@app/core/models";

@Injectable()
export class UserSocketService extends Socket {
  liveCreated$ = this.fromEvent<User>(UserEventTypes.LIVE_CREATED);
  liveUpdated$ = this.fromEvent<User>(UserEventTypes.LIVE_UPDATED);
  liveDeleted$ = this.fromEvent<number>(UserEventTypes.LIVE_DELETED);

  constructor() {
    super({
      url: `${environment.socketConfig.url}/user`,
      options: environment.socketConfig.opts,
    });
  }
}
