import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplNotificationsService} from './domain/ngpl-notifications.service';
import {NgplAlertAreaComponent, NgplAlertComponent} from './components';
import {LottieCacheModule, LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactoryNotification(): any {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    LottieModule.forRoot({player: playerFactoryNotification}),
    LottieCacheModule.forRoot()
  ],
  declarations: [NgplAlertComponent, NgplAlertAreaComponent],
  exports: [NgplAlertAreaComponent],
  providers: [NgplNotificationsService]
})
export class NgplNotificationsModule {
}
