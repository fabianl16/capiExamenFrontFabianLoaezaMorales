import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'userTable',
  templateUrl: './tabla-usuarios-component.component.html',
  styleUrls: ['./tabla-usuarios-component.component.css']
})
export class TablaUsuariosComponentComponent {
  @Input()
  public users!: User[];

}
