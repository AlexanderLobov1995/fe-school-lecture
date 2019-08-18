import { Injectable } from '@angular/core';
import {User} from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  getUser(): User {
    return {
      name: 'Ivan',
      surname: 'Ivanov',
      age: 30
    } as User;
  }
}
