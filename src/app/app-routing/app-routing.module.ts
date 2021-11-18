import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { InicioComponent } from 'app/COMPONENTS/inicio/inicio.component';
import { ModifiedComponent } from 'app/COMPONENTS/modified/modified.component';
import { AddComponent } from 'app/COMPONENTS/add/add.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:ModifiedComponent}
];

@NgModule({
  /* imports: [CommonModule],
  declarations: [] */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
