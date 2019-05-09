import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Create form
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
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
    // This is where register logic comes
    this.loading = false;
  }

}
