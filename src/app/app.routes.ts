import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'verify', component: VerifyCodeComponent },
    { path: 'logged-in', component: LoggedInComponent },
    { path: '**', component: LoginComponent }
];
