
import { Component, OnInit } from '@angular/core';
import { Person } from '../person-details/Person';

@Component({
  selector: 'app-print-all-persons-details',
  templateUrl: './print-all-persons-details.component.html',
  styleUrls: ['./print-all-persons-details.component.css']
})
export class PrintAllPersonsDetailsComponent implements OnInit {

  public allPersons: Person[] = [];
  constructor() { }

  ngOnInit() {
    this.allPersons.push({ name: 'Veera', age: 31, location: 'Bangalore', country: 'India' });
    this.allPersons.push({ name: 'Garry', age: 32, location: 'NewYork' });
    this.allPersons.push({ name: 'Robert', age: 25, location: 'Amsterdam' });
    this.allPersons.push({ name: 'Alex', age: 29 });
  }

}
