import {Component} from '@angular/core';
import { DynamicForm }     from '../../app/forms/dynamic-form.component';
import { QuestionService } from '../../app/forms/question.service';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'initial-validation-form',
    templateUrl: 'app/initial-validation-form-component/initial-validation-form-component.html',
    directives: [DynamicForm],
  providers:  [QuestionService]
})

export class InitialValidationFormComponent {
    title: string = "Validation Form"
    questions:any[]
      constructor(
         private router: Router,
         service: QuestionService
         ) {
    this.questions = service.getValidationQuestions();
  }
 }
