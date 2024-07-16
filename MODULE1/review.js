class Car {
    constructor(brand, model, year) {
        (this.brand = brand), (this.model = model), (this.year = year);
    }
    displayInformation() {
        console.log(this.brand, this.model, this.year);
    }
}

instance = new Car('value1', 'value2', 'value3');
instance.displayInformation();

class otherClass extends Car {
    constructor(brand, model, year, otherElement) {
        super(brand, model, year);
        this.otherElement = otherElement;
    }
    getOtherThingHere() {
        console.log(this.brand, this.model, this.year, this.otherElement);
    }
}

instance2 = new otherClass('value1', 'value2', 'value3', 'value4');
instance2.getOtherThingHere();

//asynchronous code
database.query('SELECT * FROM hugetable', function (rows) {
    var result = rows;
});
console.log('Hello World');

//promisse
const fetch = function (url) {
    return new Promise((resolve, reject) => {
        request((error, apiResponse) => {
            if (error) {
                reject(error);
            }

            resolve(apiResponse);
        });
    });
};
