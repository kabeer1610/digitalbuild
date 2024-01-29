import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { RfiListComponent } from './rfi-list/rfi-list.component';


const routes: Routes = [
  // {path:'',component:LoginComponent},
  // {path:'home',component:HomeComponent}

  {
    path: '',                       // {1}
    component: HomeLayoutComponent,
    //canActivate: [AuthGuard],       // {2}
    children: [
      {
        path: 'home',
        component: HomeComponent   // {3}
      },
      {
        path: 'rfi-list',
        component: RfiListComponent   // {3}
      }
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent, // {4}
    children: [
      {
        path: '',
        component: LoginComponent   // {5}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
