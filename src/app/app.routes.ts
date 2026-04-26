import { Routes } from '@angular/router';
import { BeanPageComponent } from './bean/page/bean-page/bean-page.component';
import { BEAN_ROUTES } from './bean/bean.routes';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';
import { MainLayout } from './layout/main.layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
                
            {path: '', component:LandingPageComponent},
            {path: 'beans', children:BEAN_ROUTES},
        ]
    }
];