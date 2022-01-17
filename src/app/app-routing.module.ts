import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TEstudiantesComponent } from './components/testudiantes/testudiantes.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"estudiantes"},
  {path:"estudiantes" ,component: TEstudiantesComponent}, 
  {path:"**",  component:TEstudiantesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
