import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAnalyticsRoutingModule } from './dashboardanalytics-routing.module';
import { DashboardAnalyticsComponent } from './dashboardanalytics.component';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [
        CommonModule,
        DashboardAnalyticsRoutingModule,
        TableModule,
        ProgressBarModule,
        MenuModule,
        ButtonModule,
        RippleModule,
        ChartModule
    ],
    declarations: [
        DashboardAnalyticsComponent
    ]
})
export class DashboardAnalyticsModule { }
