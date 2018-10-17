import { Component, OnInit } from '@angular/core';
import EmployeeService from '../../services/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  query = '';
  constructor(private employeeService: EmployeeService) { }

  mychange(key) {
    this.employeeService.setFilter(key);
  }

  ngOnInit(): void {
    this.query = this.employeeService.filterKey;
  }
}
