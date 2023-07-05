// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'experience', component: ExperienceComponent }
];
export default appRoutes;