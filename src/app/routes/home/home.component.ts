import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  onEmployeeSelect(id) {
    this.router.navigate(['/employee', id]);
  }
}
