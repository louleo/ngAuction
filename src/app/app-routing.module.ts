import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'products/:productId',
    loadChildren: () => import('./product/product.module').then(m =>m.ProductModule)
  }
];