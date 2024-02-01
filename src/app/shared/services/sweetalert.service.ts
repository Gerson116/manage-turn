import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetalertService {
  constructor() {}

  success(message: string): void {
    Swal.fire({
      title: 'Exito',
      text: `${message}`,
      icon: 'success',
    });
  }

  error(message: string): void {
    Swal.fire({
      title: 'Exito',
      text: `${message}`,
      icon: 'error',
    });
  }

  information(message: string): void {
    Swal.fire({
      title: 'Exito',
      text: `${message}`,
      icon: 'info',
    });
  }

  confirmAction(message: string): void {
    Swal.fire({
      title: 'Esta seguro que desea ejecutar esta acción?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
