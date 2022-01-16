import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginIndexComponent } from "./login-index/login-index.component";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "",
        component: LoginIndexComponent,
        data: { title: "Login index" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
