import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getNormativList(): Observable<NormativDto[]> {
    return of(this.normativiData);
  }

  addNormativ(postData: NormativDto): Observable<boolean> {
    this.normativiData.push(postData);
    return of(true);
  }

}
