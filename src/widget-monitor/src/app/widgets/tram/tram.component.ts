import {Component, Input, OnInit} from '@angular/core';
import * as dvb from "dvbjs";
import {AppConfig} from "../../app-config";
import {Stop} from "./interfaces/dvb";

@Component({
  selector: 'app-tram',
  templateUrl: './tram.component.html',
  styleUrls: ['./tram.component.scss']
})
export class TramComponent implements OnInit {

  @Input() stops: Stop[] = [];
  @Input() timeOffset = 0;
  @Input() numberOfOpportunities = 4;

  constructor() { }

  ngOnInit(): void {}
}
