import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-animacao',
  templateUrl: './animacao.page.html',
  styleUrls: ['./animacao.page.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),

    trigger('botaoFade', [
      // ...
      state('fadeIn', style({
        opacity: 1,
        marginLeft: 0
      })),
      state('fadeOut', style({
        opacity: 0.5,
        marginLeft: 50
      })),
      transition('fadeIn => fadeOut', [
        animate('0.4s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.4s')
      ]),
    ]),
  ]
})
export class AnimacaoPage implements OnInit {

  isOpen = true;
  fade = true;

  setPosicao(event: CustomEvent<ScrollDetail>){
    console.log(event.detail.scrollTop);
    if (event.detail.scrollTop > 15 )
      this.isOpen = true;
    else 
      this.isOpen = false;
  }

  setFade(){
    this.fade = !this.fade;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

  // https://angular.io/guide/animations


}
