import { TestBed, inject } from '@angular/core/testing';
import {Http} from '@angular/http';
import { TaskService } from './task.service';

describe('TaskService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TaskService,
			{provide: Http, useValue: TaskService}]
		});
	});

	it('should ...', inject([TaskService], (service: TaskService) => {
		expect(service).toBeTruthy();
	}));
});
