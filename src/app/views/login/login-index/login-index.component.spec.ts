import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginIndexComponent } from "./login-index.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { UserSocketService } from "../services/user-socket.service";

describe("LoginIndexComponent", () => {
  let component: LoginIndexComponent;
  let fixture: ComponentFixture<LoginIndexComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginIndexComponent],
      imports: [RouterTestingModule],
      providers: [UserSocketService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = fixture.debugElement.injector.get(Router);
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
