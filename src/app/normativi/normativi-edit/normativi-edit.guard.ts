import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NormativiEditComponent } from './normativi-edit.component';

@Injectable({
  providedIn: 'root'
})
export class NormativiEditGuard implements CanDeactivate<NormativiEditComponent> {
  canDeactivate(
    component: NormativiEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.normativForm.dirty) {
        const naziv = component.normativForm.get('normativNaziv')?.value || 'Novi Normativ';
        return confirm(`Zelite li ponistiti izmene za ${naziv}?`);
      }
      return true;
  }

}
