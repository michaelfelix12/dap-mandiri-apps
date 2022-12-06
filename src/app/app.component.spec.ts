// import { fakeAsync, tick } from '@angular/core/testing';
// import { from, Observable } from 'rxjs';
// import { AppComponent } from './app.component';

// class Person {
//   name?: string;
//   age?: number;
//   constructor(name?: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// describe('1. App component, introduction', () => {
//   describe('1.1. App component should be exist', () => {
//     it('1.1.1 App component should be work', () => {
//       let component = new AppComponent();
//       let test = '';
//       expect(component).toBeTruthy();
//       // expect(test).toBeTruthy() // ini pasti fail
//     });
//   });
// });

// describe('1.2. Matching data types', () => {
//   let number: number = 1;
//   let string: string = 'string';
//   it('1.2.1. Number should be equal to one', () => {
//     expect(number).toEqual(1);
//   }),
//     it('1.2.2. string should equal to string', () => {
//       expect(string).toEqual('string');
//     });
// });

// describe('2. Simple unit test scenario', () => {
//   describe('2.1. Object and array test scenario', () => {
//     const actualPerson = { name: 'john', age: 20 };
//     const expectedPerson = { name: 'john', age: 20 };
//     const persons: Person[] = [
//       new Person('john', 20),
//       new Person('Adidas', 23),
//     ];

//     const person: Person = new Person('Judas', 12);
//     it('actual person should equal to expectedPerson', () => {
//       expect(actualPerson).toEqual(expectedPerson);
//       expect(person).toBeInstanceOf(Person);
//     });

//     xit('newly added person should be instance of Person', () => {
//       const newPerson2: Person = { name: 'tequila', age: 23 };
//       persons.push(newPerson2);

//       for (const person of persons) {
//         expect(person).toBeInstanceOf(Person);
//       }
//     });

//     it('empty Person should betruthy', () => {
//       const empty: Person = new Person();

//       expect(empty).toBeTruthy();
//     });
//   });

//   describe('2.2. FakeAsync and trick test scenario', () => {
//     it('asynchronous test without fakeasync', (done) => {
//       let test: boolean = false;
//       setTimeout(() => {
//         test = true;
//         expect(test).toBeTrue();
//         done();
//       }, 1000);
//       // expect(test).toBeTrue();
//     });

//     it('asynchronous test with fakeasync', fakeAsync(() => {
//       let test: boolean = false;
//       setTimeout(() => {
//         test = true;
//         expect(test).toBeTrue();
//       }, 1000);

//       expect(test).toBeFalse();

//       tick(500);
//       expect(test).toBeFalse();

//       tick(500);
//       expect(test).toBeTrue();
//     }));
//   });
// });

// function fetchCallBack(callback: (data: string) => void): void {
//   setTimeout(() => {
//     callback('MandiriDap');
//   }, 1000);
// }

// function fetchPromise(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     fetchCallBack(resolve);
//   });
// }

// function fetchObservable(): Observable<string> {
//   return from(fetchPromise());
// }

// describe('3. Asynchronously unit test scenario', () => {
//   const expected = 'MandiriDap';
//   it(`actual should have value as ${expected}`, (done) => {
//     fetchCallBack((actual) => {
//       expect(actual).toMatch(expected);
//       done();
//     });
//   });

//   describe('3.1. Test scenario for callback', () => {
//     it(`actual should have value as ${expected}`, (done) => {
//       fetchCallBack((actual) => {
//         expect(actual).toMatch(expected);
//         done();
//       });
//     });
//   });

//   describe('3.2. Test scenario for promise functions', () => {
//     it(`Promise actual should have value as ${expected}`, (done) => {
//       fetchPromise().then((actual) => {
//         expect(actual).toMatch(expected);
//         done();
//       });
//     });

//     it(`Promise actual should have value as ${expected}`, async () => {
//       const actual = await fetchPromise();
//       expect(actual).toMatch(expected);
//     });
//   });

//   describe('3.3. Test scenario for observable functions', () => {
//     it(`Subscribe actual should have value as ${expected}`, (done) => {
//       fetchObservable().subscribe((actual: any) => {
//         expect(actual).toMatch(expected);
//         done();
//       });
//     });

//     xit(`Subscribe actual should have value as ${expected}`, async () => {
//       const actual = await fetchObservable().toPromise;
//       expect(actual).toMatch(expected);
//     });
//   });

//   describe('Test after, before', ()=> {
//     beforeAll(()=> {
//       console.log('Before All')
//     })

//     beforeEach(()=>{
//       console.log('Before each')
//     })

//     afterAll(()=>{
//       console.log('After All')
//     })

//     afterEach(()=> {
//       console.log('After Each')
//     })

//     it('nyoba 1', ()=> {
//       console.log('it 1')
//     })

//     it('nyoba 2', ()=> {
//       console.log('it 2')
//     })

//     it('nyoba 3', ()=> {
//       console.log('it 3')
//     })
//   })
// });
