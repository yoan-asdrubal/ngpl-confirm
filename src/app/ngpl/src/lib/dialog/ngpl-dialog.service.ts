import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EMPTY, Observable} from 'rxjs';
import {NgplConfirmComponent} from './ngpl-confirm/ngpl-confirm.component';
import {NgplDialogConfirmModel} from './ngpl-dialog-confirm.model';
import {NgplInfoDialogComponent} from './ngpl-info-dialog/ngpl-info-dialog.component';
import {NgplLottieComponent} from './ngpl-lottie/ngpl-lottie.component';


@Injectable({
  providedIn: 'root'
})
export class NgplDialogService {

  constructor(private dialog: MatDialog) {
  }

  public confirm(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title || 'Confirmar';
    data.message = data.message || 'Esta seguro?';
    data.showCancel = data.showCancel || true;
    data.showIcon = data.showIcon || true;

    let dialogRef: MatDialogRef<NgplConfirmComponent>;
    dialogRef = this.dialog.open(NgplConfirmComponent, {
      width: '480px',
      disableClose: true,
      data,
      backdropClass: 'ngpl-dialog-backdrop-class',
      panelClass: 'ngpl-dialog-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public info(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title || 'Información';
    data.message = data.message || 'Operación Realizada Satisfactoriamente';
    data.showCancel = data.showCancel || false;
    data.showIcon = data.showIcon || false;

    let dialogRef: MatDialogRef<NgplInfoDialogComponent>;
    dialogRef = this.dialog.open(NgplInfoDialogComponent, {
      width: '480px',
      disableClose: true,
      data,
      backdropClass: 'ngpl-dialog-backdrop-class',
      panelClass: 'ngpl-dialog-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public lottie(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title;
    data.showCancel = data.showCancel || false;
    data.showIcon = false;

    let dialogRef: MatDialogRef<NgplLottieComponent>;
    dialogRef = this.dialog.open(NgplLottieComponent, {
      width: '480px',
      disableClose: false,
      data,
      backdropClass: 'ngpl-dialog-backdrop-class',
      panelClass: 'ngpl-dialog-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public lottieSuccess(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.type = data.type || 'success';
    data.lottiePath = data.lottiePath || `/assets/lottie/check-success.json`;
    let dialogRef: MatDialogRef<NgplLottieComponent>;
    dialogRef = this.dialog.open(NgplLottieComponent, {
      width: '480px',
      disableClose: false,
      data,
      backdropClass: 'ngpl-dialog-backdrop-class',
      panelClass: 'ngpl-dialog-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public lottieConfirm(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title || 'Confirmación';
    data.showCancel = data.showCancel || true;
    data.showIcon = false;
    data.type = data.type || 'confirm';

    let dialogRef: MatDialogRef<NgplLottieComponent>;
    dialogRef = this.dialog.open(NgplLottieComponent, {
      width: '480px',
      disableClose: false,
      data,
      backdropClass: 'ngpl-dialog-backdrop-class',
      panelClass: 'ngpl-dialog-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public lottieWarn(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title || 'Aviso';
    data.showIcon = false;
    data.type = data.type || 'warn';

    let dialogRef: MatDialogRef<NgplLottieComponent>;
    dialogRef = this.dialog.open(NgplLottieComponent, {
      width: '480px',
      disableClose: false,
      data,
      backdropClass: 'ngpl-dialog-backdrop-class',
      panelClass: 'ngpl-dialog-panel-class'
    });
    return dialogRef.afterClosed();
  }
}
