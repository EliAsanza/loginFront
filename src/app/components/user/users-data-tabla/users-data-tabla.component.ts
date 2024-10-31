import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { UserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/auth-service/auth.service';


@Component({
  selector: 'app-users-data-tabla',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './users-data-tabla.component.html',
  styleUrl: './users-data-tabla.component.css'
})
export class UsersDataTablaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource<any>();
  userName: string = '';
  userId: string = '';
  userEmail: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      this.dataSource.data = data;
    });

    const user = this.authService.getCurrentUser();
    this.userName = user!.userName;
    this.userId = user!.id;
    this.userEmail = user!.email;
  }
}