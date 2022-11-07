import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSalesRoutingModule } from './dashboardsales-routing.module';
import { MenuModule } from 'primeng/menu';
import { ProgressBarModule } from 'primeng/progressbar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DashboardSalesComponent } from './dashboardsales.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [
        CommonModule,
        DashboardSalesRoutingModule,
        MenuModule,
        ProgressBarModule,
        TimelineModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ChartModule,
        OverlayPanelModule,
    ],
    declarations: [
        DashboardSalesComponent
    ]
})
export class DashboardSalesModule { }
