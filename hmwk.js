function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zip, occupation, hourlyWage, certification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.certification = certification;
    }
    //getters and setters
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhone = function () {
        return this.phoneNumber;
    };
    Person.prototype.setPhone = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZip = function () {
        return this.zip;
    };
    Person.prototype.setZip = function (zip) {
        this.zip = zip;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    Person.prototype.setHourlyWage = function (hours, rate) {
        this.hourlyWage = hours * rate;
    };
    Person.prototype.addCerts = function () {
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        for (var i = 0; i < certs.length; i++) {
            this.certification.push(certs[i]);
        }
    };
    return Person;
}());
function fullName(person) {
    return "Full Name: " + person.getFirstName() + " " + person.getLastName();
}
function seeAddress(person) {
    return "Location: " + person.getState() + " " + person.getZip();
}
function seeCertifications(person) {
    return "Certification: " + person.getCertifications();
}
function seeWage(person) {
    return "Wage: $" + person.getHourlyWage();
}
var person1 = new Person("Jill", "Scott", 45, "444-456-9999", "NC", "28230", "Singer");
document.getElementById("div2").innerHTML = fullName(person1);
var person2 = new Person("Daniel", "Boone", 25, "222-333-4444", "MN", "23423", "Woodsman");
document.getElementById("div3").innerHTML = fullName(person2);
document.getElementById("div4").innerHTML = seeAddress(person2);
person2.setHourlyWage(30, 60);
document.getElementById("div5").innerHTML = seeWage(person2);
