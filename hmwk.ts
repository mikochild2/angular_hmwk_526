function sayHello(person: string){
    return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

class Person{
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private state: string;
    private zip: string;
    private occupation: string;
    private hourlyWage: number;
    private certification: string[];


    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zip: string, occupation: string, hourlyWage?: number, certification?:string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zip = zip;
        this.occupation= occupation;
        this.hourlyWage = hourlyWage;
        this.certification = certification;
    }
 

    //getters and setters
    getFirstName(): string{
        return this.firstName;
    }

    setFirstName(firstName: string): void{
        this.firstName = firstName;
    }

    getLastName(): string{
        return this.lastName;
    }

    setLastName(lastName: string): void{
        this.lastName = lastName;
    }

    getAge(): number{
        return this.age;
    }

    setAge(age: number): void{
        this.age = age;
    }

    getPhone(): string{
        return this.phoneNumber;
    }

    setPhone(phoneNumber: string): void{
        this.phoneNumber = phoneNumber;
    }

    getState(): string{
        return this.state;
    }

    setState(state: string): void{
        this.state = state;
    }

    getZip(): string{
        return this.zip;
    }

    setZip(zip: string): void{
        this.zip = zip;
    }

    getOccupation(): string{
        return this.occupation;
    }

    setOccupation(occupation: string): void{
        this.occupation = occupation;
    }

    getHourlyWage(): number{
        return this.hourlyWage;
    }

    setHourlyWage(hours: number, rate: number): void{
        this.hourlyWage = hours * rate;
    }

        addCerts(...certs){
        for(let i=0; i< certs.length; i++){
            this.certification.push(certs[i]);
        }
    }

}

function fullName(person){
    return "Full Name: " + person.getFirstName() + " " + person.getLastName();
}

function seeAddress(person){
    return "Location: " + person.getState() + " " + person.getZip();
}

function seeCertifications(person){
    return "Certification: " + person.getCertifications();
}

function seeWage(person){
    return "Wage: $" + person.getHourlyWage();
}


let person1 =new Person("Jill", "Scott", 45, "444-456-9999", "NC", "28230", "Singer");
document.getElementById("div2").innerHTML = fullName(person1);

let person2 = new Person("Daniel", "Boone", 25, "222-333-4444", "MN", "23423", "Woodsman", );
document.getElementById("div3").innerHTML = fullName(person2);
document.getElementById("div4").innerHTML = seeAddress(person2);
person2.setHourlyWage(30,60);
document.getElementById("div5").innerHTML = seeWage(person2);
