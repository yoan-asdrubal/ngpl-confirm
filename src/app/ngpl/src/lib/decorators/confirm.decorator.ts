import {Type} from '@angular/core';
import {take} from 'rxjs/operators';
import {NgplDialogConfirmModel, NgplDialogModule, NgplDialogService} from '../dialog';
import {EMPTY} from 'rxjs';

// Pass confirmService as option of decorator in prop confirm
// to access to that service and use confirm function
export function Confirmable(
  options?: NgplDialogConfirmModel
): any {
  // our factory function will return our actual decorator function, but now we have
  // an actual options object to configure our alert box :)
  return function(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // the usual, caching the original implementation
    const originalMethod = descriptor.value;
    // default values for our config, we’ll overwrite this with our options parameter


    descriptor.value = function(args: any[]) {
      const service = NgplDialogModule?.injector.get<NgplDialogService>(NgplDialogService as Type<NgplDialogService>);
      if (!!service) {
        const dialogRef = service.confirm(options);
        return dialogRef.pipe(take(1)).subscribe((confirmed: boolean) => {
          if (!!confirmed) {
            originalMethod.call(this, args);
          }
        });
      }
      return EMPTY;
    };
    return descriptor;
  };
}
