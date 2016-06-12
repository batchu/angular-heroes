import {Component, Input} from '@angular/core';
import { DynamicForm }     from '../../app/forms/dynamic-form.component';
import { QuestionService } from '../../app/forms/question.service';

@Component({
    selector: 'registration-form',
    templateUrl: 'app/registration-form-component/registration-form-component.html',
    directives: [DynamicForm],
  providers:  [QuestionService]
})

export class RegistrationFormComponent {
     @Input() validationFormData: any;

    title: string = "Registration"
    questions:any[]
      constructor(service: QuestionService) {
    this.questions = service.getRegistrationQuestions();
  }
 }
