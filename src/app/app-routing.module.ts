import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgplConfirmTestComponent} from './app-test/ngpl-confirm-test/ngpl-confirm-test.component';
import {NgplLottieTestComponent} from './app-test/ngpl-lottie-test/ngpl-lottie-test.component';

const routes: Routes = [
  {
    path: 'ngpl-confirm',
    component: NgplConfirmTestComponent
  }, {
    path: 'ngpl-lottie',
    component: NgplLottieTestComponent
  }, {
    path: '**',
    component: NgplConfirmTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
