import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
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

  /** Muestra dialog de confirmacion
   Despues de usarse se debe validar el resultado emitido al cerrarse el dialog de las siguientes formas
   @example
   const options: ConfirmData = {
            title: 'Confirmación',
            message: `Esta seguro que desea realizar la operacion?? `
        };

   @example Agregando operador de rjxs para filtrar
   this.appDialog.confirm(options)
   .pipe(
   filter(val => !!val),
   tap((val: any) => {

            -- implemmentacion

        })
   ).subscribe();

   @example Agregando condicion antes de realizar una operacion
   this.appDialog.confirm(options)
   .pipe(
   tap((val: any) => {
        if(!!val) {

         -- implemmentacion

        }
    })
   ).subscribe();
   */
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
      backdropClass: 'confirm-backdrop-class',
      panelClass: 'confirm-panel-class'
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
      backdropClass: 'confirm-backdrop-class',
      panelClass: 'confirm-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public lottie(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.title = data.title || 'Información';
    data.showCancel = data.showCancel || false;
    data.showIcon = false;

    let dialogRef: MatDialogRef<NgplLottieComponent>;
    dialogRef = this.dialog.open(NgplLottieComponent, {
      width: '480px',
      disableClose: false,
      data,
      backdropClass: 'confirm-backdrop-class',
      panelClass: 'confirm-panel-class'
    });
    return dialogRef.afterClosed();
  }

  public lottieSuccess(data: NgplDialogConfirmModel = {}): Observable<boolean> {
    data.type = data.type || 'success';

    let dialogRef: MatDialogRef<NgplLottieComponent>;
    dialogRef = this.dialog.open(NgplLottieComponent, {
      width: '480px',
      disableClose: false,
      data,
      backdropClass: 'confirm-backdrop-class',
      panelClass: 'confirm-panel-class'
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
      backdropClass: 'confirm-backdrop-class',
      panelClass: 'confirm-panel-class'
    });
    return dialogRef.afterClosed();
  }
}
