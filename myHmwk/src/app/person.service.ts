import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personArr: Person[] = [
    new Person("Jill", "Scott", 44, "333-444-2222"),
    new Person("Tom", "Shoes", 48, "222-222-4444", "NV", "88888", "Actor"),
    new Person("Janet", "Jane", 28, "444-333-2222")
  ];

  private music: string;
  
  constructor() {}
  //constructor(music: string) { this.music = music; }

  getAllPeople(): Person[] {
    return this.personArr;
  }

  getContact() {
    return this.person1.getFirstName() + " " + this.person1.getLastName() + " can be reached at " + this.person1.getPhone() + "."
  }

  getBio(){
    return this.person2.getFirstName() + ", age " + this.person2.getAge() + ", is a " + this.person2.getOccupation() + " out of " + this.person2.getState() + "."
  }

  person1 = new Person("Jill", "Scott", 45, "444-456-9999", "NC", "28230", "Singer");

  person2 = new Person("Daniel", "Boone", 25, "222-333-4444", "MN", "23423", "Woodsman", );


 
}
