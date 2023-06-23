import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensageService {
  message: string = '';
  colors: string = '';

  constructor() { }

  clear(){
    this.message = '';
  }

  erro(message: string){
    this.message = message;

    this.colors = '#F47676';

    // setTimeout(() => {
    //   this.clear()
    // },4000);
  }

  alert(message: string){
    this.message = message;

    this.colors = '#dfd880';

    // setTimeout(() => {
    //   this.clear()
    // },4000);
  }

  neutro(message: string){
    this.message = message;

    this.colors = '#3065ac';

    // setTimeout(() => {
    //   this.clear()
    // },4000);
  }

  confirm(message: string){
    this.message = message;

    this.colors = '#bdecb6';

    // setTimeout(() => {
    //   this.clear()
    // },5000);
  }

}

