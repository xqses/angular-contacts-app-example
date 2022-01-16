import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "@app/core/models";
import { environment } from "@app/env";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  index(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.appApi.baseUrl}/user`);
  }

  show(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.appApi.baseUrl}/user/${userId}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${environment.appApi.baseUrl}/user`, user);
  }

  update(user: Partial<User>): Observable<User> {
    return this.http.patch<User>(
      `${environment.appApi.baseUrl}/user/${user.id}`,
      user
    );
  }

  destroy(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.appApi.baseUrl}/user/${id}`);
  }
}
