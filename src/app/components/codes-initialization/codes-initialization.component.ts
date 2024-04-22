import { Component } from '@angular/core';

@Component({
  selector: 'app-codes-initialization',
  templateUrl: './codes-initialization.component.html',
  styleUrl: './codes-initialization.component.css'
})
export class CodesInitializationComponent {
  focus:any;
  focus1:any;
  codes:any[]=[
    {
      name:'الشرائح الضريبية',
      discription:' الشرائح الضريبية التي ستحتسب في عملية احتساب الضريبة'
    },
    {
      name:'تبديلات الذاتية',
      discription:' أنواع التبديلات التي يمكن ان تحصل في الذاتية ولها تأثير على المالية'
    },
    {
      name:'تعويضات العاملين',
      discription:' أنواع التبديلات التي يمكن ان تحصل في الذاتية ولها تأثير على المالية'
    },
  ]
}
