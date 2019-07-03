import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/service.index';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: []
})
export class PacienteComponent implements OnInit {

  paciente: Paciente = new Paciente('','','', new Date() , 0, '','','',0,0,'','','');

  constructor(
    public _pacienteService: PacienteService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { 
    activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if ( id !== 'nuevo') {
        this.cargarPaciente( id );
      }

    });
  }

  ngOnInit() {
  }

  cargarPaciente( id: string ) {

    this._pacienteService.cargarPaciente( id )
      .subscribe( paciente =>  this.paciente = paciente );
  }

  guardarPaciente( f: NgForm ){

    console.log(f.valid);
    console.log(f.value);

    if ( f.invalid ) {
      return;
    }

    this._pacienteService.guardarPaciente( this.paciente )
      .subscribe( paciente => {

        this.paciente._id = paciente._id;
        this.router.navigate(['/paciente', paciente._id ]);

      });

  }









}
