import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Component
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { DemoComponent } from './pages/demo/demo.component';
import { SharedDirective } from './shared/directives/shared.directive';
//Material
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
// import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    SideNavComponent,
    LoginLayoutComponent,
    SharedDirective,
    DemoComponent
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
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
