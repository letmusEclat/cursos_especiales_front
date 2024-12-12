import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss'],
  imports:[
    CommonModule,
    RouterModule,
  ]
})
export class ProfesorComponent implements OnInit {

  materias: any[] = [
    {
      nombre: 'Matemáticas',
    }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  irCursos() {
    this.router.navigate(['sys/teacher/cursos']);
  }

}
