import { Component, OnInit } from '@angular/core';
import { NormativiService } from '../normativi.service';

@Component({
  selector: 'app-normativi-lista',
  templateUrl: './normativi-lista.component.html',
  styleUrls: ['./normativi-lista.component.scss']
})
export class NormativiListaComponent implements OnInit {

  constructor(private service: NormativiService) { }

  ngOnInit(): void {
  }

}
