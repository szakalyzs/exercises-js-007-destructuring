'use strict';

//1-2. feladat------------------------
const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName: f = 'unknown', lastName: l = 'unknown', job: j = 'unknown' } = user;

console.log(f, l, j);


//3. feladat---------------------------
const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [, first , ,third , ,fifth] = names;

console.log(first, third, fifth);
