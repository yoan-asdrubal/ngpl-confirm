import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

export enum AlertType {WARNING, DANGER, INFO, SUCCESS}

export class Alert {

  /**
   * Constructor
   * @param type Tipo de Alerta {WARNING, DANGER, INFO, SUCCESS}
   * @param title Titulo de la alerta
   * @param message Mensaje de la alerta
   * @param toast toast=true Se muestra como toast, toast=false Se muestra como SweetAlert
   */
  constructor(public type: AlertType, public title: string, public message: string, public lottiePath: string = null) {
  }

  static of(method: string, response: HttpResponse<any> | HttpErrorResponse, name: string): Alert {
    return alertFrom(method, response, name);
  }
}

export function alertFrom(method: string, response: HttpResponse<any> | HttpErrorResponse, name: string): Alert {

  // verificando success
  // if(method != "GET" && response.ok)
  //   return createSuccessAlert(method);

  // comprobando el status
  const status = response.status;
  if (status === 500) {
    return createServerFailingAlert(method);
  }
  if (status === 401 || status === 403) {
    return createUnauthorizedAlert(method);
  }
  // comprobando el body
  let body: any = {};
  try {
    body = response;
  } catch (ex) {
    return createServerFailingAlert(method);
  }

  // comprobando errores
  if (body.errors) {
    return createErrorListAlert(method, body.errors);
  }

  if (body.type) {
    return createByTypeAlert(method, body);
  }

  if (body.exception) {
    return createServerFailingAlert(method);
  }

  return createByDefault(name);
}

export function createByDefault(name = ''): Alert {
  return new Alert(AlertType.DANGER, 'Error', 'Error en la Petición ' + name);
}

export function createByTypeAlert(method, body): Alert {

  if (body.type === 'error') {
    return createErrorMessageAlert(method, body.message);
  }

  if (body.type === 'success') {
    return createSuccessAlert(body.message);
  }

  return createInfoMessageAlert(method, body.message);
}

export function createSuccessAlert(message = '', lottiePath = null): Alert {
  return new Alert(AlertType.SUCCESS, TITLES.OK, message, lottiePath);
}

export function createErrorAlert(message = ''): Alert {
  return new Alert(AlertType.DANGER, TITLES.FAIL, message);
}

export function createServerFailingAlert(method): Alert {
  return new Alert(AlertType.DANGER, TILTES_ERROR_METHOD[method] || TITLES.FAIL, MESSAGES.SERVER_FAIL);
}

export function createUnauthorizedAlert(method): Alert {
  return new Alert(AlertType.DANGER, 'Error' || TITLES.FAIL, 'No tiene autorización para esta petición.');
}

export function createErrorMessageAlert(method, message): Alert {
  return new Alert(AlertType.DANGER, TILTES_ERROR_METHOD[method] || TITLES.FAIL, message);
}

export function createInfoMessageAlert(method, message): Alert {
  return new Alert(AlertType.INFO, 'Resultado de Operación', message);
}

export function createErrorListAlert(method, errors): Alert {

  const keys = Object.keys(errors);
  const message = keys.map(key => `${errors[key]}<br>`).join('<br>');
  return new Alert(AlertType.DANGER, TILTES_ERROR_METHOD[method] || TITLES.FAIL, message);
}

export function alertTypeFrom(response: HttpResponse<any> | HttpErrorResponse): AlertType {
  const status = response.status;
  if (status >= 200 && status < 300) {
    return AlertType.SUCCESS;
  }

  return AlertType.DANGER;
}

export const TITLES: any = {};
TITLES.OK = '¡Éxito!';
TITLES.FAIL = 'Error';
TITLES.FAIL_ADD = 'Fallo al adicionar';
TITLES.FAIL_UPD = 'Fallo al actualizar';
TITLES.FAIL_DEL = 'Fallo al eliminar';

export const MESSAGES: any = {};

MESSAGES.SERVER_FAIL = 'Error interno del servidor.';

export const TILTES_ERROR_METHOD: any = {
  POST: TITLES.FAIL_ADD,
  PUT: TITLES.FAIL_UPD,
  PATCH: TITLES.FAIL_UPD,
  DELETE: TITLES.FAIL_DEL
};

