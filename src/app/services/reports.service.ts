import { Injectable } from '@angular/core';
import employees from '../data/employees';

@Injectable({
    providedIn: 'root'
  })
export default class ReportsServce {

    query(id) {
        return employees.filter(employee => employee.managerId === id);
    }
}
