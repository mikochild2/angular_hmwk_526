import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  // people: string;
  constructor() { }

  // get bio(): string{
  //   return this.personService.getContact();
  // }

  // get contact(): string{
  //   return this.personService.getBio();
  // }

  ngOnInit(): void {
  }

  handlePersonChange(event: any): void{
    console.log(event.target.value);
  }

}
