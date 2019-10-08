import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO = {
    email: '',
    password: ''
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.route.navigateByUrl('home');
  }

}
