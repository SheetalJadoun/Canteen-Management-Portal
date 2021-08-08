import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser'
import { User } from '../user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ItemServiceService } from '../item-service.service';
import { OverlayModule } from '@angular/cdk/overlay';

const mockLoggedin = {
  // "userName": "Khushi",
  "emailId": "test@gmail.com",
  "password": 123,
  "role": "Employee",
  // "walletAmt":500
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let mockLogin = mockLoggedin;
  // let testService: RegistrationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [RegistrationService, ItemServiceService],
      imports: [FormsModule, HttpClientTestingModule, OverlayModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    //testService = TestBed.get(RegistrationService);
    fixture.detectChanges();
  });

  it('email last check', () => {
    let id = component.user.emailId;
    expect(id).toBeFalsy();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email should be correct', async () => {

    fixture.whenStable().then(() => {
      let email = component.user.emailId;

      email = "abc@gmail.com";
      expect(email).toBeTruthy();
      expect(email).toEqual("abc@gmail.com");
      //expect(email).toBe("abc@gmail.com");
      //expect(component.user.emailId).toBeTruthy();
    });

  })
  it('email should be false', async () => {
    fixture.whenStable().then(() => {
      let email = component.user.emailId;

      email = '';

      expect(email).toBeFalsy();

    });
  })
});
  // it('subscribe method', fakeAsync(() => {
  //   let user: User;
  //   let logSpy = spyOn(testService, 'loginUserFromRemote').and.returnValue(of(mockLogin));
  //   let subSpy = spyOn(testService.loginUserFromRemote(), 'subscribe');
  //   component.ngOnInit;
  //   tick();
  //   expect(logSpy).toHaveBeenCalled
  // }))

  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });



// });
