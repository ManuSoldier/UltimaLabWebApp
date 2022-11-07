import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InvoiceComponent } from './invoice.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
	imports: [
		CommonModule,
		InvoiceRoutingModule,
		ButtonModule,
		TableModule,
        PanelModule
	],
	declarations: [InvoiceComponent]
})
export class InvoiceModule { }
