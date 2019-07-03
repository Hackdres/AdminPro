import { Component, OnInit } from '@angular/core';
import { Historia } from '../../models/historia.model';
import { HistoriaService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styles: []
})
export class HistoriasComponent implements OnInit {

  historias: Historia[] = [];
  paciente: Paciente = new Paciente();

  constructor(
    public _historiaServices: HistoriaService,
    // public router: Router,
    public activatedRoute: ActivatedRoute
  ) { 

    activatedRoute.params.subscribe( params => {
      let id = params['paciente'];

      // this.paciente = id; // envia el id del paciente al nuevo formulario

      if ( id !== 'nuevo') {
        this.cargarHistorias( id );
      }

    });

  }

  ngOnInit() {
  }


  cargarHistorias( id: string ) {

    this._historiaServices.cargarHistoriasPaciente( id )
      .subscribe( historias => this.historias = historias );

  }
















}
