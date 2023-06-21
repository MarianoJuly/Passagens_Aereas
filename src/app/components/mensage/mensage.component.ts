import { Component } from '@angular/core';
import { MensageService } from 'src/app/services/mensage.service';

@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.scss']
})
export class MensageComponent {

  constructor(public messagesS: MensageService){};

  ngOnInit(): void {};

}
