import { Injectable } from '@angular/core';
import employees from '../data/employees';


@Injectable({
  providedIn: 'root'
})
export default class EmployeeService {

  filterKey = '';
  constructor() { }

  setFilter(key) {
    this.filterKey = key;
  }

  query() {
    return this.filterKey ? employees.filter(employee => (
      employee.firstName.includes(this.filterKey) ||
      employee.lastName.includes(this.filterKey) ||
      employee.title.includes(this.filterKey)
    ))
    : employees;
  }

  get(id) {
    return employees.find(employee => employee.id === id) || {};
  }
}
