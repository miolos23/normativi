import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormativiListaComponent } from './normativi-lista/normativi-lista.component';
import { NormativiEditComponent } from './normativi-edit/normativi-edit.component';
import { NormativiArtikalListaComponent } from './normativi-artikal-lista/normativi-artikal-lista.component';
import { NormativiToolbarComponent } from './normativi-toolbar/normativi-toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'normativi', component: NormativiListaComponent
  },
  {
    path: 'normativiEdit/:id', component: NormativiEditComponent
  }
];

@NgModule({
  declarations: [
    NormativiListaComponent,
    NormativiEditComponent,
    NormativiArtikalListaComponent,
    NormativiToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NormativiModule { }
