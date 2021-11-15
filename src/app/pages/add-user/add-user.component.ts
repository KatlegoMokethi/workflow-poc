import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  offeringType = '';

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute.queryParams
        .subscribe(params => {
            this.offeringType = params['offeringType']
    });

    console.log(this.offeringType);
  }

}
