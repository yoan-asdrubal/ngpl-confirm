import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgplDialogConfirmModel} from '../ngpl-dialog-confirm.model';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ngpl-ngpl-lottie',
  templateUrl: './ngpl-lottie.component.html',
  styleUrls: ['./ngpl-lottie.component.scss']
})
export class NgplLottieComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/shapes.json'
  };

  private animationItem: AnimationItem;

  actionTextCtrl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<NgplLottieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: NgplDialogConfirmModel,
              private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.options = {...this.options, path: this.data.lottiePath || '/assets/lottie/shapes.json'};
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.setSpeed(0.8);
      this.animationItem.loop = false;
    });
  }

}
