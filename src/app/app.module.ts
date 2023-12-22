import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { SharedDirective } from './shared/directives/shared.directive';
import {ToastrModule} from 'ngx-toastr'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    SideNavComponent,
    LoginLayoutComponent,
    SharedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
