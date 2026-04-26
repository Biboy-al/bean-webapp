import { Routes } from "@angular/router";
import { BeanPageComponent } from "./page/bean-page/bean-page.component";
import { BeanListComponent } from "./component/bean-list/bean-list.component";

export const BEAN_ROUTES: Routes = [
    {path: ':id', component:BeanPageComponent}
];