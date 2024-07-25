import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProduitComponent } from './produit/produit.component';

export const routes: Routes = [
  // Vos routes ici, par exemple :
  { path: '', redirectTo: '/produits', pathMatch: 'full' },
  { path: 'produits', component: ProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }