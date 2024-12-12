import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-curso-notas-profesor',
  templateUrl: './curso-notas-profesor.component.html',
  styleUrls: ['./curso-notas-profesor.component.css'],
  imports: [CommonModule, RouterModule],
})
export class CursoNotasProfesorComponent implements OnInit {
  nombreCurso = 'Matemáticas - C1';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  irDetalleNota(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
