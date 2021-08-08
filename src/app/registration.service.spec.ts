import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OverlayModule } from '@angular/cdk/overlay';
import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
    let service: RegistrationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RegistrationService],
            imports: [HttpClientTestingModule, OverlayModule, RouterTestingModule]
        });
        //service = TestBed.inject(RegistrationService);
        service = TestBed.get(RegistrationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('fetchUserListFromRemote', () => {
        it('should return collection of users', () => {
            const userResponse = [
                {
                    id: 1,
                    emailId: 'shital@gmail.com',
                    userName: 'Sheetal',
                    password: 'abc',
                    role: 'Employee',
                    walletAmt: 100
                },
                {
                    id: 2,
                    emailId: 'shweta@gmail.com',
                    userName: 'Shweta',
                    password: 'abc',
                    role: 'Employee',
                    walletAmt: 100
                }
            ];
            let response;
            spyOn(service, 'fetchUserListFromRemote').and.returnValue(of(userResponse));
            service.fetchUserListFromRemote().subscribe(res => {
                response = res;
            })
            //expect(response).toEqual(userResponse);
        })
    });


});
