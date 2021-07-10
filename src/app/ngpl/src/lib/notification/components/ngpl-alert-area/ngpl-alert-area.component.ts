/*
 *
 * Yoan Asdrubal Quintana Ramirez.
 *  12/8/2019
 *
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgplNotificationsService} from '../../domain/ngpl-notifications.service';
import {Alert} from '../../domain/ngpl-notifications.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngpl-alert-area',
  templateUrl: './ngpl-alert-area.component.html',
  styleUrls: ['./ngpl-alert-area.component.scss']
})
export class NgplAlertAreaComponent implements OnInit, OnDestroy {

  alerts: Observable<Alert[]> = this._service.getAlertAsObservable();

  constructor(private _service: NgplNotificationsService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  doClose(alert: Alert): void{
    this._service.doClose(alert);
  }
}
