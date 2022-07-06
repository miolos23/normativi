import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lighter',
  templateUrl: './lighter.component.html',
  styleUrls: ['./lighter.component.scss']
})
export class LighterComponent implements OnInit {

  constructor() { }

  @Input() letter:string='';
  @Output() letterClicked=new EventEmitter();

  on:boolean=false;

  ngOnInit(): void {
  }

  onClick(){
    this.on=!this.on;
    this.letterClicked.emit({source: this.letter, state: this.on?'on':'off'});
  }

}
