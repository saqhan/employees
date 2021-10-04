import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from "@src/app/pages/demo/demo.component";

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'styles',
        loadChildren: () => import('./pages/styles/styles.module').then(m => m.StylesModule)
      },
      {
        path: 'shared',
        loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
