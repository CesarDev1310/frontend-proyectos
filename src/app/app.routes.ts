import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'projects',
        pathMatch: 'full'

    },
    {
        path:'**',
        redirectTo: 'projects'
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./features/auth/login/login').then(c=> c.Login)
    }
    /*,
    {
        path:'projects',
        canActivate:[authGuard],
        loadComponent: () => import('./features/auth/login/login').then(c=> c.Login)  //Componente de Proyectos
    }*/
    
];
