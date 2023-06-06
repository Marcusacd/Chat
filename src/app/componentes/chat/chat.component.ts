import { Mensagem } from 'src/app/services/models/mensagem.model';
import { LocalStorageService } from './../../local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit{
  
  mensagens: Mensagem[] = [
    {remetente:'Joao', texto:'Tudo bem!'}
  ]
  
  mensagem: string = ''

  remetente = this.localStorageService.get('usuario')

  constructor(private localStorageService: LocalStorageService){}
  
  
  
  ngOnInit(): void {
    
  }

  
  enviarChat() {
    const novaMensagem: Mensagem = new Mensagem;
    if (this.mensagem === ""){
      alert('Digite algo')            
    }else {
      novaMensagem.texto = this.mensagem
      novaMensagem.remetente = this.remetente
      this.mensagens.push(novaMensagem)    
      this.mensagem = ''
    }        
  }  
  
}

document.addEventListener('keydown', function(e){
  if(e.key == "Enter"){
    document.getElementById("send")?.click();    
  }
  document.getElementById("textarea")?.focus();
});






