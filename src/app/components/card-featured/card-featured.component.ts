import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-featured',
  templateUrl: './card-featured.component.html',
  styleUrls: ['./card-featured.component.scss']
})
export class CardFeaturedComponent implements OnInit {
  @Input() title: string = '';
  @Input() id: string = '';
  @Input() character: string = '';

  constructor() { }

  ngOnInit() {

  }

}
