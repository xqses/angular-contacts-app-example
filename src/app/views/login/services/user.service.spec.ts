import { TestBed, inject } from "@angular/core/testing";

import { UserService } from "./user.service";
import { HttpClientModule } from "@angular/common/http";

describe("User", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientModule],
    });
  });

  it("should be created", inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
