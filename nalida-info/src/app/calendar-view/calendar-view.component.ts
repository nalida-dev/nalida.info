import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import * as moment from 'moment';
import { WorkshopSchedule } from '../workshop-schedule';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  schedules: WorkshopSchedule[];
  year: number;
  month: number;
  monthData: any[];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.constructMonthData();
    this.fetchSchedules();
  }

  fetchSchedules() {
    this.scheduleService.eventsOfTheMonth(this.year, this.month)
      .subscribe(schedules => this.schedules = schedules);
    this.schedules.forEach(schedule => {
      const reservedDate = this.monthData.find(day => day.isInThisMonth && day.day === schedule.day);
      if (reservedDate) {
        reservedDate.schedule = schedule;
      } else {
        console.log({
          schedule: schedule,
          monthData: this.monthData
        });
      }
    });
  }

  constructMonthData() {
    if (!this.year || !this.month) {
      const now = moment();
      this.year = now.year();
      this.month = now.month();
      console.log({ now });
    }
    const startDay: moment.Moment = moment([this.year, this.month, 1]).day(0); // last sunday
    const lastDay: moment.Moment = startDay.clone().add(1, 'month').subtract(1, 'day').day(6);
    console.log({ startDay, lastDay });
    this.monthData = [];
    let i = 0;
    for (const day = startDay.clone(); !day.isAfter(lastDay, 'day'); day.add(1, 'day'), i++) {
      const dayData = {
        day: day.date(),
        isInThisMonth: day.month() === this.month,
        schedule: null,
        dayName: day.format('dddd'),
      };
      /*
      const tail = this.monthData[this.monthData.length - 1];
      if (tail.length < 7) {
        tail.push(dayData);
      } else {
        this.monthData.push([dayData]);
      }
      */
     this.monthData.push(dayData);
     if (i % 7 === 6) {
       this.monthData.push({newLine: true});
     }
    }
  }
}
