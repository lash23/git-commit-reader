import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'commits', loadChildren: () => import('./pages/commits/commits.module').then(m => m.CommitsModule) },
  {  path: '**', redirectTo: 'commits' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
