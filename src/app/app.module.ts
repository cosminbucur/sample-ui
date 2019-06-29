import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    appRouting,

    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
