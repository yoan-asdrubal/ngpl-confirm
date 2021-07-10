import {Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Alert, AlertType} from '../../domain/ngpl-notifications.model';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'ngpl-alert',
  templateUrl: './ngpl-alert.component.html',
  styleUrls: ['./ngpl-alert.component.scss'],
  animations: [
    trigger('alert', [
      transition('void => *', [
        style({transform: 'scale3d(.3, .3, .3)'}),
        animate(400)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'scale3d(.0, .0, .0)'}))
      ])
    ])
  ]
})
export class NgplAlertComponent implements OnInit {
  @Input() alert: Alert;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  options: AnimationOptions = {};
  private animationItem: AnimationItem;

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.options = {...this.options, path: this.alert.lottiePath};
  }

  get alertClass(): string {
    return ALERT_CLASS_TRANSLATOR[this.alert.type];
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.setSpeed(0.5);
      this.animationItem.frameRate = 60;
      this.animationItem.loop = false;
    });
  }
}

const ALERT_CLASS_TRANSLATOR = {
  [AlertType.DANGER]: 'danger',
  [AlertType.INFO]: 'info',
  [AlertType.SUCCESS]: 'success',
  [AlertType.WARNING]: 'warning'
};
