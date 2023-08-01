import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'principal',
        children: [
          {
            path: '',
            loadChildren: () => import('../principal/principal.module').then( m => m.PrincipalPageModule)
          },
          {
            path: 'videos',
            children: [
              {
                path: '',
                loadChildren: () => import('../videos/videos.module').then( m => m.VideosPageModule)
              },
              {
                path: 'reproductor/:titulo',
                loadChildren: () => import('../reproductor/reproductor.module').then( m => m.ReproductorPageModule)
              },
            ]
          },
          {
            path: 'cuentos',
            children: [
              {
                path: '',
                loadChildren: () => import('../cuentos/cuentos.module').then( m => m.CuentosPageModule)
              },
              {
                path: 'visor/:id/:titulo',
                loadChildren: () => import('../visor/visor.module').then( m => m.VisorPageModule)
              },
            ]
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
