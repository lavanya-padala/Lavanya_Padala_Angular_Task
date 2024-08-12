import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterOutlet],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  passingYears: number[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      qualifications: this.fb.array([this.createQualification()])
    });

    const currentYear = new Date().getFullYear();
    for (let year = 1990; year <= currentYear; year++) {
      this.passingYears.push(year);
    }
  }

  ngOnInit(): void {}

  get qualifications(): FormArray {
    return this.loginForm.get('qualifications') as FormArray;
  }

  createQualification(): FormGroup {
    return this.fb.group({
      educationLevel: ['', Validators.required],
      passingYear: ['', Validators.required],
      percentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  addQualification() {
    this.qualifications.push(this.createQualification());
  }

  removeQualification(index: number) {
    if (this.qualifications.length > 1) {
      this.qualifications.removeAt(index);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      debugger;
      this.router.navigate(['/submitted-data'], { state: { data: this.loginForm.value } });
    }
  }
}

