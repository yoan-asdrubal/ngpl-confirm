import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplConfirmComponent} from './ngpl-confirm/ngpl-confirm.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgplInfoDialogComponent} from './ngpl-info-dialog/ngpl-info-dialog.component';


@NgModule({
  declarations: [NgplConfirmComponent, NgplInfoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class NgplConfirmModule {

}
