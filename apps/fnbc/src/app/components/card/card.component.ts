import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'financial-independence-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() header: string;
  @Input() description: string;
  @Input() icon: string;
  @Input() sum: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
