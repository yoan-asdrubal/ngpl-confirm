import {Component, OnInit} from '@angular/core';
import {NgplDialogService} from '../../ngpl/src/lib/dialog/ngpl-dialog.service';

@Component({
  selector: 'ngpl-lottie-test',
  templateUrl: './ngpl-lottie-test.component.html',
  styleUrls: ['./ngpl-lottie-test.component.scss']
})
export class NgplLottieTestComponent implements OnInit {

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
    'procesando-orange-1',
  ];

  constructor(private ngplDialogService: NgplDialogService) {
  }


  ngOnInit(): void {
  }

  lottieDefault(lottie): void {
    this.ngplDialogService.lottie({
      lottiePath: `./assets/lottie/${lottie}.json`
    });
  }

}
