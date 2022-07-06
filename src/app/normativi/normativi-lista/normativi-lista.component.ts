import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NormativDto } from 'src/app/interfaces/normativDto';
import { NormativiService } from '../normativi.service';
// import { Location } from '@angular/common';

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
  displayedColumns: string[] = ['naziv', 'status', 'akcije'];

  mainFilter: string='';

  get normativiFiltered(){
    return this.normativi.filter(n=>n.naziv.toLocaleLowerCase().indexOf(this.mainFilter.toLocaleLowerCase())>=0);

  }

  constructor(private service: NormativiService,
              private router: Router) { }

  // goBack(){
  //   this.location.back();
  // }

  goToEdit() {
   this.router.navigate(['/normativiEdit',0]);
  }

  ngOnInit(): void {
    this.refresh();
    // this.sub = this.service.getNormativList().subscribe(
    //   (data)=>
    //    {
    //     this.normativi = data;
    //     console.log(data);

    //   },
    //   err => this.errorMessage = err
    // );
  }

  refresh(){
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

  delete(item:NormativDto){
    this.service.deleteNormativ(item.id)
      .subscribe(()=>{
        this.refresh();
      });
  }
}
