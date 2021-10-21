import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Stop} from "./interfaces/dvb";

@Component({
  selector: 'app-tram',
  templateUrl: './tram.component.html',
  styleUrls: ['./tram.component.scss']
})
export class TramComponent implements OnInit, OnChanges {

  @Input() stops: Stop[] = [];
  @Input() timeOffset = 0;
  @Input() numberOfOpportunities = 4;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('stops', this.stops)
  }

  ngOnInit(): void {
    
  }
}
