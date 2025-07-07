import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'events/:id',
        loadComponent: () => import('./home/event/event.page').then(m => m.EventPage)
      },
      {
        path: 'events/:id/buy-tickets',
        loadComponent: () => import('./home/buy-ticktes/buy-ticktes.component').then(m => m.BuyTicketsComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage)
  }

];
