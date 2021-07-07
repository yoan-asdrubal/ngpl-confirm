import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgplConfirmTestComponent} from './app-test/ngpl-confirm-test/ngpl-confirm-test.component';

const routes: Routes = [
  {
    path: 'ngpl-confirm',
    component: NgplConfirmTestComponent
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
