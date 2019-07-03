import { Component, OnInit } from '@angular/core';
import { Historia } from '../../models/historia.model';
import { HistoriaService } from '../../services/historia/historia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from '../../services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styles: []
})
export class HistoriaComponent implements OnInit {

  historia: Historia = new Historia();

  fecha = new Date();

  medico: string = '5c004c7f72281f1ea0fbede6';
  paciente: Paciente;

  constructor(
    public _historiaService: HistoriaService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public _pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.paciente = this._pacienteService.paciente;
    //console.log(this.paciente);
  }

  guardarHistoria( f: NgForm ) {
    // esta funcion es de prueba para imprimir lo que viene del evento
    console.log(f.valid);
    console.log(f.value);

    if ( f.invalid ) {
      return;
    }
  }



}