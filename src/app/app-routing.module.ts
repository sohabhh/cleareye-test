import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { ListProfilesComponent } from './profile/list-profiles/list-profiles.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: 'full'
  },
  {
    path: "add",
    component: AddProfileComponent,
    pathMatch: 'full'
  },
  {
    path: "list",
    component: ListProfilesComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
