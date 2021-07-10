import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {NgplDialogConfirmModel} from '../ngpl-dialog-confirm.model';


@Component({
  selector: 'ngpl-info-dialog',
  templateUrl: './ngpl-info-dialog.template.html',
  styleUrls: ['./ngpl-info-dialog.template.scss']
})
export class NgplInfoDialogComponent {

  constructor(public dialogRef: MatDialogRef<NgplInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: NgplDialogConfirmModel) {
  }
}
