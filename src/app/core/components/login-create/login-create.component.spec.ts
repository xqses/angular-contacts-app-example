import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginCreateComponent } from "./login-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("ContactFormComponent", () => {
  let component: LoginCreateComponent;
  let fixture: ComponentFixture<LoginCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCreateComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should call form.patchValue when ngOnChanges calls", () => {
    spyOn(component.form, "patchValue");
    const user = {
      id: 1,
      name: "test",
      email: "test@avatsaev.com",
    };
    component.user = user;
    component.ngOnChanges();
    expect(component.form.patchValue).toHaveBeenCalledWith(user);
  });

  it("should call save.emit when submit calls", () => {
    spyOn(component.save, "emit");
    const user = {
      id: 1,
      name: "test",
      email: "test@avatsaev.com",
      phone: "12345",
    };
    component.form.setValue(user);
    component.submit();
    expect(component.save.emit).toHaveBeenCalledWith(user);
  });
});
