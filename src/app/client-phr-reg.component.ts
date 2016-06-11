import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {RegCommonService} from './reg-common-service'
@Component({
  moduleId: module.id,
  selector: 'client-phr-reg-app',
  templateUrl: 'client-phr-reg.component.html',
  styleUrls: ['client-phr-reg.component.css'],
  directives: [ROUTER_DIRECTIVES],
providers: [
  ROUTER_PROVIDERS,
  RegCommonService
]
})
@Routes([
  { path: '/dashboard',component: ClientPhrRegAppComponent},

])
export class ClientPhrRegAppComponent {
  title = 'client-phr-reg works!';
}
