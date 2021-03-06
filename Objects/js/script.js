const user = {
  name: 'Stepan',
  age: 66,
  address: {
    city: 'NA',
    country: {
      zip: 343554,
      state: 'AR',
    },
    street: 'Nabarezhna st.',
  }
}

console.log(user.address.country.state);

console.log(user.name);
console.log(user.age);

console.log(user['name']);
console.log(user['first name']);

console.log(user[6]);


for (let key in user) {
  console.log('key', key);
  console.log('value', user[key]);
}

console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user));



// const a = 4;
// const b = a;

const student = Object.assign({}, user);
// const student = Object.create(user);
console.log('student', student);
student.role = 'student'
const teacher = { ...student, ...user }
teacher.role = 'teacher';

for (let key in user) {
  student[key] = user[key];
}

// student.name = 'Mykola';

// console.log('user', user);
// console.log('teacher', teacher)

const rectangle = {
  width: 200,
  height: 100,
  x: 0,
  y: 0,
  moveX(x) {
    this.x = x;
  },
  moveY(y) {
    this.y = y;
  },
  setWith: function (w) {
    this.width = w;
  },
  setHeight: function (h) {
    console.log('this', this);
    this.height = h;
  },
  calcSquare() {
    console.log(this)
    return this.width * this.height
  },
}


rectangle.moveX(100);
rectangle.moveY(100);
rectangle.setWith(400);
rectangle.setHeight(300);


console.log('rectangle', rectangle);
const rect = document.getElementById('rectangle');
rect.style.width = `${rectangle.width}px`;
rect.style.height = `${rectangle.height}px`;
rect.style.left = `${rectangle.x}px`;
rect.style.top = `${rectangle.y}px`;
/////////////////////////////////////////////////

const cart = {
  table: 700,
  tv: 1000,
  addItem: function (name, price) {
    this[name] = price;
  },
  calcSum: function () {

  },
}

cart.addItem('table', 300);
cart.addItem('tv', 1000);
cart.addItem('table', 400);
cart.calcSum()

cart.totalSum;

console.log(cart);

// {
//   name: 'ivan',
//   hasAccess: true,
// }

const car = {
  model: 'Audi',
  year: 2022,
  avgSpeed: 60,
  fuelAmount: 78,
  showInfo: function() {
    return `Car model ${this.model}, car year - ${this.year}`;
  },
  refuel: function(amount) {
    this.fuelAmount = amount;
  },
  addDriver: function(driver) {
    this.driver = driver;
  },
  calcTime: function(distance, driverName) {
    if (this.driver.name === driverName && this.driver.hasAccess) {
      console.log('Yeaah! Go! Go! ');

      const restFuelAmount = 0;

      if (restFuelAmount >= this.fuelAmount) {
        const time = 0;

        return time;
      } else {
        return 'Plz refuel car!'
      }
    } else {
      return 'Have no access!';
    }
  }
}

car.addDriver('Stepan');
console.log('car', car);


function Car(model, year) {
  return {
    this.model = model;
    this.year = year;
  }
}

const honda = new Car('honda', 2016);
const bmw = new Car('bmw', 2019);
const toyota = new Car('toyota', 2020);
