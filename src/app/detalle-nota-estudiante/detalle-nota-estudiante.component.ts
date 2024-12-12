import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-nota-estudiante',
  templateUrl: './detalle-nota-estudiante.component.html',
  styleUrls: ['./detalle-nota-estudiante.component.css']
})
export class DetalleNotaEstudianteComponent implements OnInit {
  curso: any = {
    id: 1,
    nombre: 'Matemáticas',
    nota: 4.5,
    estado: 'Aprobado',
    acta: 'Acta 1',
  };

  constructor() { }

  ngOnInit() {
  }

}
