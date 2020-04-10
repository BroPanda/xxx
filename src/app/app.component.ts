import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '.././models/UserModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg = 'users';
  users: UserModel[];

  constructor(private httpQ: HttpClient) {
    this.httpQ.get<UserModel[]>(`https://jsonplaceholder.typicode.com/users`).subscribe(value => {
      console.log(value);
      this.users = value;
    });
  }
}
