import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
