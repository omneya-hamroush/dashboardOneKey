// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { UnitEditComponent } from '../user-management/units/unit-edit/unit-edit.component';
import { UnitAddComponent } from '../user-management/units/unit-add/unit-add.component';
import { UnitListComponent } from '../user-management/units/unit-list/unit-list.component';
import { UserkeyAddComponent } from '../user-management/userkeys/userkey-add/userkey-add.component';
import { UserkeyEditComponent } from '../user-management/userkeys/userkey-edit/userkey-edit.component';
import { UserkeyGetComponent } from '../user-management/userkeys/userkey-get/userkey-get.component';
import { RentcontractGetComponent } from '../user-management/rentcontracts/rentcontract-get/rentcontract-get.component';
import { RentcontractCreateComponent } from '../user-management/rentcontracts/rentcontract-create/rentcontract-create.component';
import { RentcontractEditComponent } from '../user-management/rentcontracts/rentcontract-edit/rentcontract-edit.component';
import { FormGetComponent } from '../user-management/forms/form-get/form-get.component';
import { FormAddComponent } from '../user-management/forms/form-add/form-add.component';
import { FormEditComponent } from '../user-management/forms/form-edit/form-edit.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
			

		]),
	],
	providers: [],
	declarations: [
		DashboardComponent,
	]
})
export class DashboardModule {
}
