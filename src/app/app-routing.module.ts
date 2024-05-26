import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : '', component:  ParentComponentComponent},
{ path : 'parent', component: ParentComponentComponent },
{ path : 'Acceuil', component: AppComponent },
{ path : '**', redirectTo: 'AppComponent' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
