import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NormativiService } from '../normativi.service';
import { NormativDto } from '../../interfaces/normativDto';

@Component({
  selector: 'app-normativi-edit',
  templateUrl: './normativi-edit.component.html',
  styleUrls: ['./normativi-edit.component.scss']
})
export class NormativiEditComponent implements OnInit, OnDestroy {

  pageTitle = 'Izmeni Normativ';
  normativForm : FormGroup;
  errorMessage: any;


  private sub: Subscription | undefined;



  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private normativiService: NormativiService) {

              this.normativForm = this.fb.group({
                  id: [0],
                  naziv:['', [Validators.required, Validators.minLength(4)]],
                  status: ['U']
              });
  }

  get idControl(){
    return this.normativForm.get('id');
  }
  get nazivControl(){
    return this.normativForm.get('naziv');

  }

  get statusControl(){
    return this.normativForm.get('status');
  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(
      params => {
        const id =  +params['id'];

        if (id==0){
          this.normativForm.reset();
          this.pageTitle='Novi normativ';
        }else{
          this.normativiService.getNormativ(id)
            .subscribe({
              next: (normativ: NormativDto) => {
                this.idControl?.setValue(normativ.id);
                this.nazivControl?.setValue(normativ.naziv);
                this.statusControl?.setValue(normativ.status);
                this.pageTitle='Izmeni normativ';
              },
              error: err => this.errorMessage = err
            });
        }


      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }



    saveNormativ(): void{
        if (this.normativForm.dirty) {
          const p = { ...this.normativForm.value };

          if (+p.id === 0) {
            this.normativiService.addNormativ(p)
              .subscribe({
                next: () => this.onSaveComplete(),
                error: err => this.errorMessage = err
              });
          } else {
            this.normativiService.updateNormativ(p)
              .subscribe({
                next: () => this.onSaveComplete(),
                // error: err => this.errorMessage = err
              });
          }
        } else {
          this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
      this.normativForm.reset();
      this.router.navigate(['normativi']);
    }
}
