import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {
  

  constructor(private personService : PersonService) { }

  ngOnInit(): void {
  }

  //Get people returns a person
  get people(): Person[] {
    return this.personService.getAllPeople();
  }

  //get people returns an observable
  // get people(): Observable<Person[]> {
  //   return of(People);
  // }

}
