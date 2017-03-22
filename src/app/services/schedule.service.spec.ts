import { TestBed, inject } from '@angular/core/testing';
import {Http} from '@angular/http';
import { ScheduleService } from './schedule.service';

describe('ScheduleService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ScheduleService,
			{provide: Http, useValue: ScheduleService}]
		});
	});

	it('should ...', inject([ScheduleService], (service: ScheduleService) => {
		expect(service).toBeTruthy();
	}));
});
