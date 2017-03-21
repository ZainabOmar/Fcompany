import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateService } from './validate.service';
import {Http} from '@angular/http';

describe('ValidateService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ValidateService,
			{provide: Http, useValue: ValidateService}]
		});
	});

	it('should ...', inject([ValidateService], (service: ValidateService) => {
		expect(service).toBeTruthy();
	}));
});
