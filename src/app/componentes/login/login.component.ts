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
    this.localStorageService.set('usuario', nome)
    console.log(this.localStorageService.get('usuario'))        
  }
}

document.addEventListener('keydown', function(e){
  if(e.key == "Enter"){
    document.getElementById("sendName")?.click();
  }
});



