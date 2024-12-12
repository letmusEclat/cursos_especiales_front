import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    data: { isLogin: true },
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'sys',
    loadComponent: () =>
      import('./layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'teacher',
        loadComponent: () =>
          import('./profesor/profesor.component').then(
            (c) => c.ProfesorComponent
          ),
      },
      {
        path: 'teacher/cursos',
        loadComponent: () =>
          import('./cursos-profesor/cursos-profesor.component').then(
            (c) => c.CursosProfesorComponent
          ),
      },
      {
        path: 'teacher/cursos/:idCurso/notas',
        loadComponent: () =>
          import('./curso-notas-profesor/curso-notas-profesor.component').then(
            (c) => c.CursoNotasProfesorComponent
          ),
      },
      {
        path: 'teacher/cursos/:idCurso/notas/:idHistorico',
        loadComponent: () =>
          import(
            './detalle-nota-estudiante/detalle-nota-estudiante.component'
          ).then((c) => c.DetalleNotaEstudianteComponent),
      },
    ],
  },
];
