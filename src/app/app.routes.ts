import { Routes } from '@angular/router';
import { BeanPageComponent } from './bean/page/bean-page/bean-page.component';
import { BEAN_ROUTES } from './bean/bean.routes';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';

export const routes: Routes = [
    {path: 'beans', children:BEAN_ROUTES},
    {path: '', component:LandingPageComponent}
];