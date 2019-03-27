import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [AboutusComponent, HomeComponent, ContactusComponent]
})
export class AppRoutingModule { }
