
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Alert, AlertType} from './ngpl-notifications.model';


@Injectable({providedIn: 'root'})
export class NgplNotificationsService {
  $alerts: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
  alerts: Alert[] = [];

  constructor( ) {

  }

  getAlertAsObservable(): Observable<Alert[]> {
    return this.$alerts.asObservable();
  }

  show(alert: Alert): void {
    switch (alert.type) {
      case AlertType.DANGER: {
        this.showError(alert);
        return;
      }
      default: {
        this.showDefault(alert);
        return;
      }
    }
  }

  showError(alert: Alert): void{
    this.push(alert);
  }

  showDefault(alert: Alert): void {
    this.push(alert);
  }


  /**
   *
   */
  push(alert: Alert): void {
    if (!alert) {
      return;
    }
    this.alerts.push(alert);

    this.$alerts.next(this.alerts);
    this._createExpirationCall(alert);
  }

  doClose(alert: Alert): void {
    const idx = this.alerts.indexOf(alert);
    if (idx >= 0) {
      this.alerts.splice(idx, 1);
      this.$alerts.next(this.alerts);
    }
  }

  private _createExpirationCall(alert: Alert): void {
    setTimeout(() => {
      this.doClose(alert);
    }, 5000);
  }
}
