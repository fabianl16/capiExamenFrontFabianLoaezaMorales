import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponentComponent } from './components/tabla-usuarios-component/tabla-usuarios-component.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    TablaUsuariosComponentComponent,
    LayoutPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
