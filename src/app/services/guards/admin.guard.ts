import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService
  ){

  }

  canActivate() {

    if( this._usuarioService.usuario.role === 'ADMIN_ROLE'){
      return true;
    } else {
      console.log('Bloqueado por el Guard Admin');
      //this.router.navigate(['/login']); si es solamente direccionar sin necesidad de desloguearse, de lo contrario tiene que importar el Usuarioservice
      this._usuarioService.logout();
      return false;
    }
  }
}
