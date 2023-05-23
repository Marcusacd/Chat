import { LocalStorageService } from './../../local-storage.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: string = '';

  constructor(private localStorageService: LocalStorageService){}

  

  guarda(nome: any){
    this.localStorageService.set('1', nome)
    console.log(this.localStorageService.get('1'))
  }
}
