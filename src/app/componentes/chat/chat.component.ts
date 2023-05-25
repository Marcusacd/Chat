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
    {remetente:'Marcus', texto:'Ola'},
    {remetente:'Marcus', texto:'Tudo bem?'},
    {remetente:'Marcus', texto:'Prazer'},
    {remetente:'Marcus', texto:'Bem Vindo'},
    {remetente:'Marcus', texto:'VitalSis'}
    
    
  ]  
  
  mensagem: string = ''
   constructor(private localStorageService: LocalStorageService){
    

   }
  
  
  
  ngOnInit(): void {
    
  }

  
  enviarChat() {
    
  }










}


