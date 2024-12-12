import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule,RouterModule],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}
  ingresar() {
    this.router.navigate(['sys/teacher']);
  }
}
