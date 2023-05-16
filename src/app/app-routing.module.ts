import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'chat', component:ChatComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
