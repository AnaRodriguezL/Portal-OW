import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  // Obtiene el token del almacenamiento local (localStorage) o donde lo hayas guardado
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    // Clona la solicitud y agrega el token al encabezado de autorización
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Token ${authToken}`)
    });
    return next(clonedReq);
  } else {
    // Si no hay token, envía la solicitud sin modificar
    return next(req);
  }
};
