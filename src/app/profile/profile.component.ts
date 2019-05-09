import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', './photos.css', './avatars.css', './songs.css', './badges.css']
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUserData();
  }

  // Simulate server request and mock some user data
  getUserData() {
    this.httpClient.get<User>('http://server.org')
    .pipe(first())
    .subscribe(
      data => {
        // Get data and save it to user
        this.user = data;
      },
      error => {
        // It will fail so I will mock some data
        this.user = new User();
        this.user.id = 1;
        this.user.username = 'Jack Black';
        this.user.email = 'tenaciousd@gmail.com';
      });
  }

}
