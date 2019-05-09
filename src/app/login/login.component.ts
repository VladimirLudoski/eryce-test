import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Create form
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  // When form is submited
  onSubmit(): void {
    this.submitted = true;
    // Stop here if form is invalid
    if (this.userForm.invalid) { return; }
    this.loading = true;
    // This is where login logic comes
    this.loading = false;
  }

  // Activate router is Register button is pressed
  onRegister() {
    this.router.navigate(['/register']);
  }

}
