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
    {remetente:'joao', texto:'jashdjkasd'}
  ]
  
  mensagem: string = ''

  rementente = this.localStorageService.get('usuario')

  constructor(private localStorageService: LocalStorageService){}
  
  
  
  ngOnInit(): void {
    
  }

  
  enviarChat() {
    const novaMensagem: Mensagem = new Mensagem;
    novaMensagem.remetente = this.rementente
    novaMensagem.texto = this.mensagem
  

    this.mensagens.push(novaMensagem)
  }

}


