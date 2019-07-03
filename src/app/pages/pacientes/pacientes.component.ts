import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';

import { Router, ActivatedRoute } from '@angular/router'; //probando rediccionamiento 

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styles: []
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(
    public _pacienteServices: PacienteService,
    public router: Router, //probando rediccionamiento 
    public activatedRoute: ActivatedRoute //probando rediccionamiento 
  ) { }

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes( ){
    this._pacienteServices.cargarPacientes()
      .subscribe( pacientes => this.pacientes = pacientes );
  }

  buscarPaciente( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarPacientes();
      return;
    }    
    this._pacienteServices.buscarPacientes( termino )
      .subscribe( pacientes => this.pacientes = pacientes );
  }

  borrarPaciente( paciente: Paciente ) {

    this._pacienteServices.borrarPaciente( paciente._id )
      .subscribe( () => this.cargarPacientes() );

  }

  agendarCita( paciente: string, medico: Medico ) {

    this._pacienteServices.seleccionarPaciente( paciente )
      .subscribe();

    // this.paciente._id = paciente._id;
    // this.router.navigate(['/paciente', paciente ]);

  }




}
