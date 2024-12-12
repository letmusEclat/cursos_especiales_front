import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css'],
  imports:  [NgFor, RouterModule],
})
export class CursosProfesorComponent implements OnInit {
  listaCursos: any[] = [
    {
      id: 1,
      nombre: 'Matematicas - C1',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  irNotas(idCurso: number) {
    this.router.navigate(['sys/teacher/cursos/',idCurso,'notas']);
  }
}
