import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
    {
        path:'',
        component: LayoutPageComponent,
        children:[
            { path: 'users', component: UserPageComponent},
            { path: '**', redirectTo: 'users'},
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuariosRoutingModule { }