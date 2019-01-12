import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkshopSchedule } from './workshop-schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  mock: WorkshopSchedule[] = [
    new WorkshopSchedule(2018, 12, 27, 'event1 ', 'description 1'),
    new WorkshopSchedule(2019, 1, 3, 'event2 ', 'description 2'),
    new WorkshopSchedule(2019, 1, 8, 'event3 ', 'description 3'),
    new WorkshopSchedule(2019, 1, 17, 'event4 ', 'description 4'),
    new WorkshopSchedule(2019, 1, 23, 'event5 ', 'description 5'),
    new WorkshopSchedule(2019, 2, 2, 'event6 ', 'description 6'),
  ];


  constructor() { }

  eventsOfTheMonth(year: number, month: number): Observable<WorkshopSchedule[]> {
    return of(this.mock.filter(schedule => schedule.year === year && schedule.month === month));
  }
}
