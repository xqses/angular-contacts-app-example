import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { User } from "@app/core/models";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "login-create-form",
  templateUrl: "./login-create.component.html",
  styleUrls: ["./login-create.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCreateComponent implements OnInit, OnChanges {
  user: User;

  @Output() save = new EventEmitter<User>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [this.user.id],
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      phone: [this.user.phone],
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.user) {
      this.form.patchValue({ ...this.user });
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
