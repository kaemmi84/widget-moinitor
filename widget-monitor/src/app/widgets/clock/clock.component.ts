import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {map, share} from "rxjs/operators";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {

  subscription: Subscription = new Subscription();

  /**
   * Time to show
   */
  time: Date = new Date();

  /**
   * The time is running
   */
  @Input() timeIsRunning: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.letTimeRunning()
  }

  private setTime(time: Date) {
    this.time = time;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timeIsRunning) {
      this.letTimeRunning();
    }
  }

  private letTimeRunning() {
    this.subscription.unsubscribe();
    if (this.timeIsRunning) {
      this.subscription = timer(0, 1000)
        .pipe(
          map(() => new Date()),
          share()
        )
        .subscribe(time => {
          this.setTime(time);
        });
    }
  }
}
