import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InitialValidationFormComponent } from './initial-validation-form.component';

describe('Component: InitialValidationForm', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [InitialValidationFormComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([InitialValidationFormComponent],
      (component: InitialValidationFormComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(InitialValidationFormComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(InitialValidationFormComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-initial-validation-form></app-initial-validation-form>
  `,
  directives: [InitialValidationFormComponent]
})
class InitialValidationFormComponentTestController {
}

