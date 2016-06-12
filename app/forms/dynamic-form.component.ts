import { Component, Input, OnInit }  from '@angular/core';
import { ControlGroup }              from '@angular/common';
import { Router } from '@angular/router-deprecated';


import { QuestionBase }                 from './question-base';
import { QuestionControlService }       from './question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@Component({
  selector:'dynamic-form',
  templateUrl:'app/forms/dynamic-form.component.html',
  directives: [DynamicFormQuestionComponent],
  providers:  [QuestionControlService]
})
export class DynamicForm {
  @Input() questions: QuestionBase<any>[] = [];
  form: ControlGroup;
  payLoad = '';
  constructor( private router: Router, private qcs: QuestionControlService) {  }
  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    let link = ['RegistrationForm',this.form.value];
    this.router.navigate(link);
  }
}
