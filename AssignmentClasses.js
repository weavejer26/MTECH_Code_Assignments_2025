//In Class Assignment Classes JW 10/29/2025

{
class Car {
    
    constructor(make, model, year) { 
        
        this.make = make;

        this.model = model;

        this.year = year;
    }

    displayInfo() {

        console.log(" " + this.make," " + this.model," " + this.year);
    }
}

const car1 = new Car('Ford', 'Ecosport', 2020);

const car2 = new Car('Volkswagon', 'Golf GTI', 2021);

car1.displayInfo();

car2.displayInfo();
}

{
class Phone {
    
    constructor(brand, model,) { 
        
        this.brand = brand;

        this.model = model;
    }

    phoneTypes() {

        console.log(" " + this.brand," " + this.model);
    }
}

const phone1 = new Phone("Samsung", "Galaxy S22");

const phone2 = new Phone("iPhone", "17 Pro");

phone1.phoneTypes();

phone2.phoneTypes();
}