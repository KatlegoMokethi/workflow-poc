import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offering-a',
  templateUrl: './offering-a.component.html',
  styleUrls: ['./offering-a.component.css']
})
export class OfferingAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAddUser(): void {
    this.router.navigate(['/add-user', { queryParams: { offeringType: 'OfferingA' } }]);
  }
}
