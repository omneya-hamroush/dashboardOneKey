// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Translate
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../partials/partials.module';
// Services
import { HttpUtilsService, TypesUtilsService, InterceptService, LayoutUtilsService} from '../../../core/_base/crud';
// Shared
import {NgxPaginationModule} from 'ngx-pagination';
import { ActionNotificationComponent } from '../../partials/content/crud';
// Components
import { UserManagementComponent } from './user-management.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { RoleEditDialogComponent } from './roles/role-edit/role-edit.dialog.component';
import { UserRolesListComponent } from './users/_subs/user-roles/user-roles-list.component';
import { ChangePasswordComponent } from './users/_subs/change-password/change-password.component';
import { AddressComponent } from './users/_subs/address/address.component';
import { SocialNetworksComponent } from './users/_subs/social-networks/social-networks.component';
import { UnitService } from './unit.service';
import { UserkeysService } from './userkeys.service';
import { AuthService } from './auth.service';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule
} from '@angular/material';
import {
	usersReducer,
	UserEffects
} from '../../../core/auth';
import { UnitEditComponent } from './units/unit-edit/unit-edit.component';
import { UnitListComponent } from './units/unit-list/unit-list.component';
import { UnitAddComponent } from './units/unit-add/unit-add.component';
import { UserkeyAddComponent } from './userkeys/userkey-add/userkey-add.component';
import { UserkeyEditComponent } from './userkeys/userkey-edit/userkey-edit.component';
import { UserkeyGetComponent } from './userkeys/userkey-get/userkey-get.component';
import { RentcontractCreateComponent } from './rentcontracts/rentcontract-create/rentcontract-create.component';
import { RentcontractGetComponent } from './rentcontracts/rentcontract-get/rentcontract-get.component';
import { FormAddComponent } from './forms/form-add/form-add.component';
import { FormGetComponent } from './forms/form-get/form-get.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { RentcontractEditComponent } from './rentcontracts/rentcontract-edit/rentcontract-edit.component';

const routes: Routes = [
	{
		path: '',
		component: UserManagementComponent,
		children: [
			{
				path: '',
				redirectTo: 'roles',
				pathMatch: 'full'
			},
			{
				path: 'roles',
				component: RolesListComponent
			},
			{
				path: 'users',
				component: UsersListComponent
			},
			{
				path: 'users:id',
				component: UsersListComponent
			},
			{
				path: 'users/add',
				component: UserEditComponent
			},
			{
				path: 'users/add:id',
				component: UserEditComponent
			},
			{
				path: 'users/edit',
				component: UserEditComponent
			},
			{
				path: 'users/edit/:id',
				component: UserEditComponent
			},
			{
				path: 'units/edit/:id',
				component: UnitEditComponent
			},
			{
				path: 'units/create',
				component: UnitAddComponent
			},
			{
				path:'units',
				component: UnitListComponent
			},
			{
				path: 'userkeys/create',
				component:UserkeyAddComponent
			},
			{
				path: 'userkeys/edit/:id',
				component:UserkeyEditComponent
			},
			{
				path: 'userkeys',
				component:UserkeyGetComponent
			},
			{
				path:'rentcontracts',
				component:RentcontractGetComponent
			},
			{
				path:'rentcontracts/create',
				component:RentcontractCreateComponent
			},
			{
				path:'rentcontracts/edit/:id',
				component:RentcontractEditComponent
			},
			{
				path:'forms',
				component:FormGetComponent

			},
			{
				path:'forms/create',
				component:FormAddComponent
			},
			{
				path:'forms/edit/:id',
				component:FormEditComponent
			}

		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature('users', usersReducer),
        EffectsModule.forFeature([UserEffects]),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
        MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
		NgxPaginationModule,
		Ng2SearchPipeModule
	],
	providers: [
		AuthService,
		{
        	provide: HTTP_INTERCEPTORS,
       	 	useClass: AuthService,
			multi: true
		},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService,
		UnitService,
		UserkeysService
	],
	entryComponents: [
		ActionNotificationComponent,
		RoleEditDialogComponent
	],
	declarations: [
		UserManagementComponent,
		UsersListComponent,
		UserEditComponent,
		RolesListComponent,
		RoleEditDialogComponent,
		UserRolesListComponent,
		ChangePasswordComponent,
		AddressComponent,
		SocialNetworksComponent,
		UnitEditComponent,
		UnitListComponent,
		UnitAddComponent,
		UserkeyAddComponent,
		UserkeyEditComponent,
		UserkeyGetComponent,
		RentcontractCreateComponent,
		RentcontractGetComponent,
		FormAddComponent,
		FormGetComponent,
		FormEditComponent,
		RentcontractEditComponent
	]
})
export class UserManagementModule {}
