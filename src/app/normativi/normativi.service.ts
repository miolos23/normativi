import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NormativArtikalDto } from '../interfaces/normativArtikalDto';
import { NormativDto } from '../interfaces/normativDto';

@Injectable({
  providedIn: 'root'
})
export class NormativiService {

  constructor() { }

  normativiData: NormativDto[] = [
    { id:1, naziv: 'Wellness pakovanje', status: 'U'},
    { id:2, naziv: 'Plazma pakovanje', status: 'U'},
    { id:3, naziv: 'Josh pakovanje', status: 'U'}
  ];

  normativArtikalData: NormativArtikalDto[]=[
    { id: 1, artikal: {id: "2042150", naziv: "PLAZMA 150G"}},
    { id: 2, artikal: {id: "2042300", naziv: "PLAZMA 300G"}},
    { id: 3, artikal: {id: "2042600", naziv: "PLAZMA 600G"}},

  ];



  getNormativList(): Observable<NormativDto[]> {
    return of(this.normativiData);
  }

  addNormativ(postData: NormativDto): Observable<boolean> {
    this.normativiData.push(postData);
    return of(true);
  }

  getNormativ(id:number):Observable<NormativDto>{
    if (id === 0) {
      return of(this.initializeNormativ());
    }
    return of(this.normativiData.find(q => q.id == id) as any);
  }

  updateNormativ(normativ: NormativDto): Observable<NormativDto> | any {

  }

  deleteNormativ(id: number):Observable<boolean>{
    //this.normativiData=this.normativiData.filter(q=>q.id!=id);
    if(confirm("Da li ste sigurni da zelite da obrisete normativ?")) {
      this.normativiData=this.normativiData.splice(this.normativiData.findIndex(q => q.id == id));
    }
    return of(true);
  }

  private initializeNormativ(): NormativDto {
    return {
      id: 0,
      naziv: '',
      status: ''  
    };
  }
}
