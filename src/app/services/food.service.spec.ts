import { TestBed, inject } from '@angular/core/testing';
import {Http} from '@angular/http';
import { FoodService } from './food.service';

describe('FoodService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FoodService,
			{provide: Http, useValue: FoodService}]
		});
	});

	it('should ...', inject([FoodService], (service: FoodService) => {
		expect(service).toBeTruthy();
	}));
});
