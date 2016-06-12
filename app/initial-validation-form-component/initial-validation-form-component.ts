import {Component} from '@angular/core';
import { DynamicForm }     from '../../app/forms/dynamic-form.component';
import { QuestionService } from '../../app/forms/question.service';

@Component({
    selector: 'initial-validation-form',
    templateUrl: 'app/initial-validation-form-component/initial-validation-form-component.html',
    directives: [DynamicForm],
  providers:  [QuestionService]
})

export class InitialValidationFormComponent {
    title: string = "Validation Form"
    questions:any[]
      constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
 }
