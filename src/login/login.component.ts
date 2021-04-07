import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = { username: 'pawankale20', password: 'Pawan@123' };
  showPassword = false;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/operations']);
  }


}
