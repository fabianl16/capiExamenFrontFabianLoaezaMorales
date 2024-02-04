import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.url_api;

  constructor(private http: HttpClient) { }
  
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}users`)
    .pipe(
      catchError( () => of([])),
    );

  }
}
