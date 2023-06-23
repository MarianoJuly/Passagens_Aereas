import { Component, OnInit } from '@angular/core';
import { MensageService } from './services/mensage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Passagens_Aereas';

  constructor(private mensagem: MensageService){}

  ngOnInit(): void {};

  teste(){
    this.mensagem.confirm("Teste");
  }

  alert(){
    this.mensagem.alert("PFFFFFFFFFFFFF");
  }

  erro(){
    this.mensagem.erro("KKKKKKKKKKK ovo curingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }

  neutro(){
    this.mensagem.neutro("Foi tudo");
  }
}
