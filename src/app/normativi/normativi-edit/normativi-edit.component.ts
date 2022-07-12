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

  normativ: NormativDto | undefined;
  private sub: Subscription;



  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private normativiService: NormativiService) {
  }

  ngOnInit(): void {
    this.normativForm = this.fb.group({
      naziv:['', Validators.required],
      status: 'U'
    });

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getNormativ(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  displayNormativ(normativ: NormativDto): void {
    if (this.normativForm) {
      this.normativForm.reset();
    }
    this.normativ = normativ;

    if (this.normativ.id === 0) {
      this.pageTitle = 'Dodaj Normativ';
    } else {
      this.pageTitle = `Izmeni Normativ: ${this.normativ.naziv}`;
    }

    this.normativForm.patchValue({
      normativNaziv: this.normativ.naziv,
      normativStatus: this.normativ.status
    });
  }

  getNormativ(id: number): void {
    this.normativiService.getNormativ(id)
      .subscribe({
        next: (normativ: NormativDto) => this.displayNormativ(normativ),
        error: err => this.errorMessage = err
      });
  }


    saveNormativ(): void{
      if (this.normativForm.valid) {
        if (this.normativForm.dirty) {
          const p = { ...this.normativ, ...this.normativForm.value };

          if (p.id === 0) {
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
      } else {
        this.errorMessage = 'Unesite ispravne vrednosti.';
      }
    }

    onSaveComplete(): void {
      this.normativForm.reset();
      this.router.navigate(['normativi']);
    }
}
