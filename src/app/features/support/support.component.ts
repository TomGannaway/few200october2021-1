import { Component, OnInit } from '@angular/core';
import { SupportModel } from './models';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {


  model: SupportModel = {
    supportContact: {
      name: 'Sue',
      emailAddress: 'sue@aol.com',
      phone: '555-1212'
    },
    supportPhone: null,
    status: 'Groovy',
    currentlyOpen: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
