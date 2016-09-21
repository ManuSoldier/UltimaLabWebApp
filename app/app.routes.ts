import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemo} from './demo/view/dashboarddemo';
import {SampleDemo} from './demo/view/sampledemo';
import {FormsDemo} from './demo/view/formsdemo';
/*;
import {DataDemo} from './demo/view/datademo';
import {PanelsDemo} from './demo/view/panelsdemo';
import {OverlaysDemo} from './demo/view/overlaysdemo';
import {MenusDemo} from './demo/view/menusdemo';
import {MessagesDemo} from './demo/view/messagesdemo';
import {MiscDemo} from './demo/view/miscdemo';
import {EmptyDemo} from './demo/view/emptydemo';*/
import {Setup} from './setup';

export const routes: Routes = [
    {path: '', component: DashboardDemo},
    {path: 'sample', component: SampleDemo},
    {path: 'forms', component: FormsDemo},
    /*{path: 'forms', component: FormsDemo},
    {path: 'data', component: DataDemo},
    {path: 'datatable', component: DataTableDemo},
    {path: 'panels', component: PanelsDemo},
    {path: 'overlays', component: OverlaysDemo},
    {path: 'menus', component: MenusDemo},
    {path: 'messages', component: MessagesDemo},
    {path: 'misc', component: MiscDemo},
    {path: 'empty', component: EmptyDemo},*/
    {path: 'setup', component: Setup}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
