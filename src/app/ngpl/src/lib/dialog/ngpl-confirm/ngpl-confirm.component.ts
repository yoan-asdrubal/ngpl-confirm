import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {NgplDialogConfirmModel} from '../ngpl-dialog-confirm.model';


@Component({
  selector: 'ngpl-confirm',
  templateUrl: './ngpl-confirm.template.html',
  styleUrls: ['./ngpl-confirm.template.scss']
})
export class NgplConfirmComponent {
  actionTextCtrl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<NgplConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: NgplDialogConfirmModel) {
  }
}
