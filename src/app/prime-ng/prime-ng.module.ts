import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';

import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [],
  exports:[
    TableModule,
    ButtonModule,
    MessagesModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
