import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    MainContainerComponent
  ],
  imports: [
    // angular modules
    CommonModule,
    FormsModule,

    // 3rd party components
    MaterialModule,
    RouterModule,
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party components
    MaterialModule
  ],
  providers: []
})
export class SharedModule { }
