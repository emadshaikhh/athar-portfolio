import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Projects } from './component/projects/projects';
import { Skills } from './component/skills/skills';
import { Testimonials } from './component/testimonials/testimonials';
import { Contact } from './component/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: About
    },
     {
        path: 'projects',
        component: Projects
     },
     {
        path: 'skills',
        component: Skills
     },
     {
        path: 'testimonials',
        component: Testimonials
     },
     {
        path: 'contact',
        component: Contact
     }
];
