import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() cardNumber: string | undefined;
  @Input() expiration: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
