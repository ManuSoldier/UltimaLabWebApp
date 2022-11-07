import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: {breadcrumb: 'Sales Dashboard'}, loadChildren: () => import('./sales/dashboardsales.module').then(m => m.DashboardSalesModule) },
        { path: 'dashboard-saas', data: {breadcrumb: 'Saas Dashboard'}, loadChildren: () => import('./saas/dashboardsaas.module').then(m => m.DashboardSaasModule) },
        { path: 'dashboard-sales', data: {breadcrumb: 'Sales Dashboard'}, loadChildren: () => import('./sales/dashboardsales.module').then(m => m.DashboardSalesModule) },
        { path: 'dashboard-analytics', data: {breadcrumb: 'Analytics Dashboard'}, loadChildren: () => import('./analytics/dashboardanalytics.module').then(m => m.DashboardAnalyticsModule) },
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }