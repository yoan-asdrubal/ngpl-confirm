import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplConfirmComponent} from './ngpl-confirm/ngpl-confirm.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgplInfoDialogComponent} from './ngpl-info-dialog/ngpl-info-dialog.component';
import {LottieCacheModule, LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { NgplLottieComponent } from './ngpl-lottie/ngpl-lottie.component';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [NgplConfirmComponent, NgplInfoDialogComponent, NgplLottieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot()
  ]
})
export class NgplConfirmModule {

}
