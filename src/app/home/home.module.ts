import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }])
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
