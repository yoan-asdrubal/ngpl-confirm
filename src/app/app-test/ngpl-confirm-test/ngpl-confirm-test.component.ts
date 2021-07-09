import {Component, OnInit} from '@angular/core';
import {NgplDialogService} from '../../ngpl/src/lib/ngpl-dialog.service';
import {filter, take, tap} from 'rxjs/operators';

@Component({
  selector: 'ngpl-confirm-test',
  templateUrl: './ngpl-confirm-test.component.html',
  styleUrls: ['./ngpl-confirm-test.component.scss']
})
export class NgplConfirmTestComponent implements OnInit {


  constructor(private ngplDialogService: NgplDialogService) {
  }


  ngOnInit(): void {
  }

  eliminarSinAccion(): void {
    this.ngplDialogService.confirm({
      title: 'Confirmación',
      message: 'Mensaje de Confirmación Sin Acción'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.info({
        message: 'Elemento eliminado satisfactoriamente'
      }))
    )
      .subscribe();
  }

  eliminarConAccion(): void {
    this.ngplDialogService.confirm({
      title: 'Confirmación',
      message: `Escriba  ELIminar para confirmar la acción`,
      actionText: 'ELIminar'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.info({
        message: 'Elemento eliminado satisfactoriamente'
      }))
    )
      .subscribe();
  }

  confirmNormalIcon(): void {
    this.ngplDialogService.confirm({
      title: 'Confirmación',
      message: 'Con Normal Icon'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.info({
        message: 'Elemento eliminado satisfactoriamente'
      }))
    )
      .subscribe();
  }

  confirmSmallIcon(): void {
    this.ngplDialogService.confirm({
      title: 'Confirmación',
      message: `Confirmacoin con Icono Pequeño`,
      actionText: 'ELIminar',
      iconType: 'small'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.info({
        message: 'Confirmación Satisfactoria'
      }))
    )
      .subscribe();
  }

  confirmConTextoResaltado(): void {
    this.ngplDialogService.confirm({
      title: 'Confirmación',
      message: `Escriba <b><i>ELIminar</i></b> para confirmar la acción`,
      actionText: 'ELIminar',
      iconType: 'small'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.info({
        message: 'Elemento eliminado satisfactoriamente'
      }))
    )
      .subscribe();
  }

  lottieDefault(lottie): void {
    this.ngplDialogService.lottie({
      lottiePath: `/assets/lottie/${lottie}.json`
    });
  }

  eliminarSinAccionLottie(): void {
    this.ngplDialogService.lottieConfirm({
      title: 'Confirmación',
      message: 'Mensaje de Confirmación Sin Acción',
      lottiePath: '/assets/lottie/trash2.json'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.lottieSuccess({
        title: 'Confirmado correctamente',
        type: 'success'
      }))
    )
      .subscribe();
  }

  eliminarConAccionLottie(): void {
    this.ngplDialogService.lottieConfirm({
      title: 'Confirmación',
      message: `Escriba  ELIminar para confirmar la acción`,
      actionText: 'ELIminar',
      lottiePath: '/assets/lottie/trash2.json'
    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.lottieSuccess({
        title: 'Confirmado correctamente',
        type: 'success'
      }))
    )
      .subscribe();
  }

  confirmConTextoResaltadoLottie(): void {
    this.ngplDialogService.lottieConfirm({
      title: 'Confirmación',
      message: `Escriba <b><i>ELIminar</i></b> para confirmar la acción`,
      actionText: 'ELIminar',
      iconType: 'small',
      lottiePath: '/assets/lottie/trash2.json'

    }).pipe(
      take(1),
      filter(value => !!value),
      tap(() => this.ngplDialogService.lottieSuccess({
        title: 'Eliminado con Hightligth correctamente',
        type: 'success'
      }))
    )
      .subscribe();
  }

  lottieCheck(lottie): void {
    this.ngplDialogService.lottieSuccess({
      title: 'Dialog Success Mostrado correctamente',
      lottiePath: `/assets/lottie/${lottie}.json`,
      type: 'success'
    });
  }

  lottieWarn(lottie): void {
    this.ngplDialogService.lottieWarn({
      title: 'Dialog Warning Mostrado correctamente',
      lottiePath: `/assets/lottie/${lottie}.json`,
      type: 'success'
    });
  }
}
