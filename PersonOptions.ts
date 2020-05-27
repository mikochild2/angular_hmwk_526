interface PersonOptions {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: string;
    state?: string;
    zip?: string;
    occupation?: string;
    hourlyWage?: number;
}

function createPerson(config: PersonOptions): {phoneNumber: string, zip: string}{
    let newPerson = {phoneNumber: "222-333-4444", zip: "25676"}; 
    if(config.phoneNumber){
        newPerson.phoneNumber = config.phoneNumber;
    }
    if(config.zip){
        newPerson.zip = config.zip;
    }
    return newPerson;
}