import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import ReportService from '../../services/reports.service';

@Component({
    templateUrl : './reports.component.html'
})
export class ReportsComponent {
    employees: any = {};

    constructor(private location: Location, private route: ActivatedRoute, private reportService: ReportService) {
        this.route.params.subscribe(params => {
            this.employees = this.reportService.query(parseInt(params.id, 10));
        });
    }
    goBack() {
        this.location.back();
    }
}
