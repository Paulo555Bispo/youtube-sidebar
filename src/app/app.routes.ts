import { Routes } from '@angular/router';
import { Analitics } from './pages/analitics/analitics';
import { Comments } from './pages/comments/comments';
import { Content } from './pages/content/content';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'content',
        component: Content,
    },
    {
        path: 'analitics',
        component: Analitics,
    },
    {
        path: 'comments',
        component: Comments,
    }
];
