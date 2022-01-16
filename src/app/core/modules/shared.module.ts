import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginCreateComponent } from "../components/login-create/login-create.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [LoginCreateComponent],
  exports: [LoginCreateComponent],
})
export class SharedModule {}
