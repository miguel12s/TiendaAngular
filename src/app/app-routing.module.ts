import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'products/description/:id',component:DescripcionComponent},
{path:'products',component:HeaderComponent},
{path:'',redirectTo:'products',pathMatch:'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
