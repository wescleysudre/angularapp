import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';


const routes: Routes = [
  {
    path: '',
    component: NgifNgforComponent
  },

  {path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule)},

  {
    path: 'primeiro-componente', component: DataBindingComponent
  },
  {
    path: 'segundo-componente', component: SegundoComponenteComponent
  },
  {
    path: 'teste', component: NgifNgforComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
