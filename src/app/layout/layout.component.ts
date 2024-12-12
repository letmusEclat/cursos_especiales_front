import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterModule],
})
export class LayoutComponent implements OnInit {
  section = 'UIS';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  home(){
    this.router.navigate(['sys/teacher']);
  }
}
