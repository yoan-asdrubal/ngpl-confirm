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

  lottieDefault(): void {
    this.ngplDialogService.lottie();
  }

  lottieCheckOrange(): void {
    this.ngplDialogService.lottie({
      lottiePath: '/assets/lottie/check-orange-1.json'
    });
  }

  lottieCheckSuccess(): void {
    this.ngplDialogService.lottie({
      lottiePath: '/assets/lottie/check-success.json'
    });
  }


  lottie(lottie): void {
    this.ngplDialogService.lottie({
      lottiePath: `/assets/lottie/${lottie}.json`
    });
  }
}
