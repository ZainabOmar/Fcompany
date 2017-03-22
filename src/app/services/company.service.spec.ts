import { TestBed, inject } from '@angular/core/testing';
import {Http} from '@angular/http';
import { CompanyService } from './company.service';
import {} from 'jasmine';

describe('CompanyService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CompanyService,
			{provide: Http, useValue: CompanyService}]
		});
	});

	it('should ...', inject([CompanyService], (service: CompanyService) => {
		expect(service).toBeTruthy();
	}));
});
