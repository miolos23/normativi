import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NormativDto } from 'src/app/interfaces/normativDto';
import { NormativiService } from '../normativi.service';

@Component({
  selector: 'app-normativi-lista',
  templateUrl: './normativi-lista.component.html',
  styleUrls: ['./normativi-lista.component.scss']
})
export class NormativiListaComponent implements OnInit {
  pageTitle: string = 'Normativi Lista';
  sub!: Subscription;
  normativi: NormativDto[] = [];
  errorMessage: string = '';
  displayedColumns: string[] = ['naziv', 'status'];

  constructor(private service: NormativiService) { }

  ngOnInit(): void {
    this.sub = this.service.getNormativList().subscribe({
      next: normativi => {
        this.normativi = normativi;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
