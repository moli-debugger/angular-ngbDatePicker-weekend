import { Component, OnInit } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styles: [
    `
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      border-radius: 0.25rem;
      display: inline-block;
      width: 2rem;
    }
    .custom-day:hover, .custom-day.focused {
      background-color: #e6e6e6;
    }
    .weekend {
      background-color: red;
      border-radius: 1rem;
      color: white;
    }
    .hidden {
      display: none;
    }
  `,
  ],
})
export class NgbdDatepickerCustomday implements OnInit {
  ngOnInit(): void {
    for (let i in this.weekDays) {
      if (!this.workingDays.includes(this.weekDays[i])) {
        this.weekEnds.push(parseInt(i));
      }
    }
  }
  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Satarday',
    7: 'Sunday',
  };

  weekEnds = [];

  workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Satarday'];

  isDisabled = (date: NgbDate, current: { month: number; year: number }) =>
    date.month !== current.month;
  isWeekend = (date: NgbDate) => {
    console.log(this.weekEnds);
    return this.weekEnds.includes(this.calendar.getWeekday(date));
  };
}
