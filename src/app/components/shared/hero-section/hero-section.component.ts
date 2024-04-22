import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
@Input('title') title:string='';
@Input('description') discription:string='';
@Input('imageUrl') imageUrl:string='';
}
