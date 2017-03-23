import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
	selector: 'app-brain-storming',
	templateUrl: './brain-storming.component.html',
	styleUrls: ['./brain-storming.component.css']
})

export class BrainStormingComponent implements OnInit {
	constructor(
		private authService:AuthService,
		private router: Router
		) { }

	ngOnInit() {
	}

	logout() {
		this.authService.logout()
		this.router.navigate(['/']);
	}

}
