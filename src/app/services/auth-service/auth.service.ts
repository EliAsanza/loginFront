import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:44344/api/v1/login';

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }

  verifyCode(email: string, token: string): Observable<any> {
    const url = this.apiUrl + '/verify-2fa';
    return this.http.post(url, { email, token });
  }

  getCurrentUser(): UserModel | null {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      return JSON.parse(userData) as UserModel;
    }
    return null;
  }
}
