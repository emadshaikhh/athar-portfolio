import { Component } from '@angular/core';
// Import your other components
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  // Add them all here so HTML can use them
  imports: [About, Projects, Skills, Testimonials, Contact], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { }