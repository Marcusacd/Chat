import { LocalStorageService } from './../../local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit{
  
  mensagens = [
    'bem vindo',
    'use com sabedoria',
    'boa sorte'
  ]
  
  mensagem: string = ''
   constructor(private localStorageService: LocalStorageService){

   }
  
  
  
  ngOnInit(): void {
    
  }

  
  enviarChat() {
    this.mensagens.push(this.mensagem)
  }










}


