import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent {

  mensagens = [
    'bem vindo',
    'use com sabedoria',
    'boa sorte'
  ]

  mensagem: string = ''



  enviarChat() {
    this.mensagens.push(this.mensagem)
  }



}


