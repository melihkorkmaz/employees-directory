import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import EmployeeService from '../../services/employee.service';

@Component({
    templateUrl: './employee.component.html'
})
export class EmployeeComponent {
    employee: any = {};

    constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private location: Location) {
        this.route.params.subscribe(params => {
            this.employee = this.employeeService.get(parseInt(params.id, 10));
        });
    }


    goBack() {
        this.location.back();
    }
}
