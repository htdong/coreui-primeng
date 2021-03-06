import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car.interface';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    data: [Car] = [
      { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
      { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
      { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
      { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
      { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
      { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
      { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
      { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
      { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' },
    ];

    getCarsLarge(): [Car] {
      return this.data;

      /*
      return this.http.get('/showcase/resources/data/cars-large.json')
                  .toPromise()
                  .then(res => <Car[]> res.json().data)
                  .then(data => { return data; });
      */
    }
}
