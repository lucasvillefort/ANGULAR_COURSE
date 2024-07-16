import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// i can create a lot of funtions in order to implemnets it into my class
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectUser = DUMMY_USERS[randomIndex]

}
