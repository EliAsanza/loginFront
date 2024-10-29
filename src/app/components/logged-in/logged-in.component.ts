import { Component } from '@angular/core';
import { UsersDataTablaComponent } from '../user/users-data-tabla/users-data-tabla.component';

@Component({
  selector: 'app-logged-in',
  standalone: true,
  imports: [UsersDataTablaComponent],
  templateUrl: './logged-in.component.html',
  styleUrl: './logged-in.component.css'
})
export class LoggedInComponent {

}
