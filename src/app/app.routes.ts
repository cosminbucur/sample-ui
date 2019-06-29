import { UsersComponent } from './users/pages/users/users.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutesNames } from './app.routes.names';
import { MainContainerComponent } from './shared/main-container/main-container.component';
import { HomeComponent } from './core/home/home.component';

export const appRoutes: Routes = [
    {
      path: '',
      component: MainContainerComponent,
      children: [
        { path: appRoutesNames.USERS, component: UsersComponent },
        { path: '', pathMatch: 'full', component: HomeComponent }
      ]
    },
    { path: '**', redirectTo: '/' }
  ];

export const appRouting: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);
