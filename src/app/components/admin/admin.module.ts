import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components';


@NgModule({
    declarations: [AdminComponent, AdminDashboardComponent],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
