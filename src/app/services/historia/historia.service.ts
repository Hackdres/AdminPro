import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Historia } from 'src/app/models/historia.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  totalHistorias: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }

  cargarHistorias(){
    let url = URL_SERVICIOS + '/historia';
    return this.http.get(url)
      .map( (resp: any ) => resp.historias );

  }

  cargarHistoriasPaciente( id: string ){

    let url = URL_SERVICIOS + '/historia/paciente/' + id ;
    return this.http.get(url)
      .map( (resp: any ) =>  resp.historias );

  }

  cargarHistoria( id: string ) {
    let url = URL_SERVICIOS + '/historia/' + id;
    return this.http.get( url )
      .map( (resp: any) => resp.historia );
  }

  guardarHistoria( historia: Historia ) {

    // console.log('historia');
    
    let url = URL_SERVICIOS + '/historia';

    if ( historia._id ) {
      // actualizando
      url += '/' + historia._id;
      url += '?token=' + this._usuarioService.token;

      return this.http.put( url, historia )
        .map( (resp: any) => {

          swal('Historia Actualizada', 'historia.nombre', 'success' );
          return resp.historia;
        });

    } else {
      // Creando
      url += '?token=' + this._usuarioService.token;
      
      return this.http.post( url, historia )
        .map( (resp: any) => {
  
          swal('Historia Creada', 'historia.nombre', 'success' );
          return resp.historia;
        });
    }

  }






}
