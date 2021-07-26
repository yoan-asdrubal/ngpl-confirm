import {Component, OnInit} from '@angular/core';
import {NgplDialogService} from '../../ngpl/src/lib/dialog/ngpl-dialog.service';
import {Confirmable} from '../../ngpl/src/lib/decorators/confirm.decorator';

@Component({
  selector: 'ngpl-decorator-test',
  templateUrl: './ngpl-decorator-test.component.html',
  styleUrls: ['./ngpl-decorator-test.component.scss']
})
export class NgplDecoratorTestComponent implements OnInit {

  lotties = [
    'check-green-1',
    'check-green-2',
    'check-orange',
    'check-orange-1',
    'check-success',
    'download-from-cloud-blue',
    'trash2',
    'warn-orange-1',
    'warn-orange-2',
    'sand-clock-orange',
    'no-data-orange',
    'search-blue',
    'procesando-orange-1'
  ];

  constructor(public confirmService: NgplDialogService) {
    console.log('log', 'componente created', confirmService);
  }


  ngOnInit(): void {
  }

  @Confirmable({type: 'success', message: 'Custom Confirmation '})
  confirm(action): void {
    alert(action);
    // this.ngplDialogService.lottie({
    //   lottiePath: `./assets/lottie/${lottie}.json`
    // });
  }

}
