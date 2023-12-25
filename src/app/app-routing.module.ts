import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
   },
  {
        path: 'login',
        component: LoginLayoutComponent
  },
  {
    path: 'main',
    component: ContentLayoutComponent,
    children: [
      { path: 'demo', component: DemoComponent },
      // { path: 'settings', component: SettingsComponent },
    ]
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
