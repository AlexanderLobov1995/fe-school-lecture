import { Component, OnInit } from '@angular/core';
import {MyService} from './my.service';
import {User} from '../app.interfaces';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
  providers: [MyService]
})
export class MyComponent implements OnInit {
  title = 'I am component';
  numbers: number[] = [1, 2, 3, 4, 5];
  user: User;
  isShowNumbers = true;

  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.user = this.myService.getUser();
  }

  showGreeting(): void {
    alert('Hello my component');
  }

  showNumber(num: number): void {
    alert(num);
  }
}
