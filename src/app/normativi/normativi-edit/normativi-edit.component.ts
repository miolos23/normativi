import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-normativi-edit',
  templateUrl: './normativi-edit.component.html',
  styleUrls: ['./normativi-edit.component.scss']
})
export class NormativiEditComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form=fb.group({
      naziv:[""]
    });
  }

  ngOnInit(): void {

  }

  save(){

  }

}
