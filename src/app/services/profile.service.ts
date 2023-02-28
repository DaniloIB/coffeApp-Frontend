import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  @Output() usuarioFinal:EventEmitter<string> = new EventEmitter();
  
  private nombreUsuario = new BehaviorSubject<string>('');
  public nombreUsuario$ = this.nombreUsuario.asObservable();

  constructor() { }

  addUsername(name:string){
    this.nombreUsuario.next(name);
  }
}
