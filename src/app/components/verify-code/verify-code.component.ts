import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


// Importaciones de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent {
  codeForm!: FormGroup;
  email!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.codeForm = this.fb.group({
      code: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      // Ahora puedes usar this.email en tu componente
    });
  }

  onSubmit(): void {
    if (this.codeForm.valid) {
      this.authService.verifyCode(this.email, this.codeForm.value.code).subscribe({
        next: () => {
          this.router.navigate(['/logged-in']);
        },
        error: (error) => {
          if (error.status === 401) {
            alert('Invalid or expired 2FA token');
          }
          else {
            alert('Error verifying code');
          }
        }
      });
    } else {
      alert('Invalid form');
    }
  }
}
