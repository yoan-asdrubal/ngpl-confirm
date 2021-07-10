import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgplConfirmTestComponent} from './app-test/ngpl-confirm-test/ngpl-confirm-test.component';
import {NgplLottieTestComponent} from './app-test/ngpl-lottie-test/ngpl-lottie-test.component';
import {NgplAlertTestComponent} from './app-test/ngpl-alert-test/ngpl-alert-test.component';

const routes: Routes = [
  {
    path: 'ngpl-confirm',
    component: NgplConfirmTestComponent
  }, {
    path: 'ngpl-lottie',
    component: NgplLottieTestComponent
  }, {
    path: 'ngpl-alert',
    component: NgplAlertTestComponent
  }, {
    path: '**',
    component: NgplConfirmTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
