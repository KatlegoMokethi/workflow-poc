import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offering-b',
  templateUrl: './offering-b.component.html',
  styleUrls: ['./offering-b.component.css']
})
export class OfferingBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAddUser(): void {
    this.router.navigate(['/add-user', { queryParams: { offeringType: 'OfferingB' } }]);
  }
}
