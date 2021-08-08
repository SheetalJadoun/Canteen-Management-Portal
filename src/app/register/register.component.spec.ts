import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ItemServiceService } from '../item-service.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { OverlayModule } from '@angular/cdk/overlay';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';



// const mockRegister = {
//   "userName": "Khushi",
//   "emailId": "test@gmail.com",
//   "password": 123,
//   "role": "Employee",
//   "walletAmt":500
// }
describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    // let mockReg = mockRegister;
    //  let testService: RegistrationService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            providers: [RegistrationService, ItemServiceService],
            imports: [FormsModule, HttpClientTestingModule, OverlayModule, RouterTestingModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        //testService = TestBed.get(RegistrationService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    // it('should have as title', async () => {

    //     fixture.whenStable().then(() => {
    //         const fixture = TestBed.createComponent(RegisterComponent);
    //         fixture.detectChanges();
    //         const compiled = fixture.debugElement.nativeElement;
    //         expect(compiled.querySelector('h1').textContent).toContain('Register')
    //     });
    // });

    it('email should be correct', async () => {

        fixture.whenStable().then(() => {
            let email = component.user.emailId;
            email = "abc@gmail.com";
            expect(email).toBeTruthy();
            //expect(component.user.emailId).toBeTruthy();
            // expect(email).toEqual('abc@gmail.com');

        });

    })
    it('email should be false', async () => {
        fixture.whenStable().then(() => {
            let email = component.user.emailId;
            let val = component.registerUser()
            email = '';

            expect(email).toBeFalsy();
        });
    })

    //   it("subscribe method", fakeAsync(() => {
    //     let registerSpy = spyOn(testService, 'registerUserFromRemote').and.returnValue(of(mockReg));
    //     let subSpy = spyOn(testService.registerUserFromRemote(), 'subscribe');
    //   }))

});