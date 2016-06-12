import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {InitialValidationFormComponent} from './initial-validation-form-component/initial-validation-form-component';
import {RegistrationFormComponent} from './registration-form-component/registration-form-component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
     directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/validate',
    name: 'ValidationForm',
    component: InitialValidationFormComponent
  },
  {
    path: '/register',
    name: 'RegistrationForm',
    component: RegistrationFormComponent
  }
])
export class AppComponent {
    title: string = "MyHealth Registration"
 }
