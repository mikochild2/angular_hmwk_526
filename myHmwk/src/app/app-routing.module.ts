import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: 'one', component: CompOneComponent},
  {path: 'two', component: CompTwoComponent},
  {path: 'home', component: HomePageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
