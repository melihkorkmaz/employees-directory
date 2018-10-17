import { Component, Output, EventEmitter } from '@angular/core';
import EmployeeService from '../../services/employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl : './employee-list.component.html'
})
export class EmployeeListComponent {
    @Output() employeeSelect = new EventEmitter<number>();
    constructor(private employeeService: EmployeeService) {}

    onEmployeeSelect(id) {
        this.employeeSelect.emit(id);
    }

    get employees() {
        return this.employeeService.query();
    }
}
