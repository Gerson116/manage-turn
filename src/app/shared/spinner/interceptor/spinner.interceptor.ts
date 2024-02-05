import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerServices = inject(SpinnerService);
  spinnerServices.show();
  // return next(req);
  return next(req).pipe(finalize(() => spinnerServices.hide()));
};
