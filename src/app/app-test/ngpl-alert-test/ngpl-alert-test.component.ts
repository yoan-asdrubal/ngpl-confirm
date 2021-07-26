import {Component, OnInit} from '@angular/core';
import {createErrorAlert, createSuccessAlert, NgplNotificationsService} from '../../ngpl/src/lib/notification';

@Component({
  selector: 'ngpl-alert-test',
  templateUrl: './ngpl-alert-test.component.html',
  styleUrls: ['./ngpl-alert-test.component.scss']
})
export class NgplAlertTestComponent implements OnInit {

  lotties = [
    'check-success',
    'check-green-1',
    'check-green-2',
    'check-orange',
    'check-orange-1'
  ];

  lotties1 = [
    'check-green-1',
    'check-green-2',
    'check-orange',
    'check-orange-1',
    'check-success',
    'trash2',
    'warn-orange-1',
    'warn-orange-2'
  ];

  constructor(private notificationsService: NgplNotificationsService) {
  }


  ngOnInit(): void {
  }

  // lottieDefault(lottie): void {
  //   this.notificationsService.lottie({
  //     lottiePath: `./assets/lottie/${lottie}.json`
  //   });
  // }
  showSuccess(): void {
    this.notificationsService.show(createSuccessAlert('Alerta Succss'));
  }

  showLottie(lottie): void {
    this.notificationsService.show(createSuccessAlert('Alerta Succss', `./assets/lottie/${lottie}.json`));
  }


  showError(): void {
    this.notificationsService.show(createErrorAlert('Alerta De Error'));

  }
}
