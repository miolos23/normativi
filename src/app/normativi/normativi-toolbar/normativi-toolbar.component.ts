import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-normativi-toolbar',
  templateUrl: './normativi-toolbar.component.html',
  styleUrls: ['./normativi-toolbar.component.scss']
})
export class NormativiToolbarComponent implements OnInit {

  @Input() readOnly:boolean = false;
  @Output() filtered = new EventEmitter();
  @Output() addClicked = new EventEmitter();

  searchText:string='';

  constructor() { }

  ngOnInit(): void {
  }

  filterChanged(){
    this.filtered.emit(this.searchText);
  }

}
