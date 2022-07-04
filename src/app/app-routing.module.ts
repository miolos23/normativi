import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomePageComponent
  },
  {
    path: '', component: WelcomePageComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
