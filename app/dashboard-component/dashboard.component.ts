import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: './dashboard.component.html',
     directives: [ROUTER_DIRECTIVES],
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}