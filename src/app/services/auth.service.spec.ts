import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {Http} from '@angular/http';
import {} from 'jasmine';

describe('AuthService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthService,
			{provide: Http, useValue: AuthService}
			]
		});
	});

	it('should ...', inject([AuthService], (service: AuthService) => {
		expect(service).toBeTruthy();
	}));
});
