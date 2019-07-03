// import { Paciente } from './paciente.model';
// import { Medico } from './medico.model';
export class Historia {

    constructor(
      public fechaini?: Date,
      public fechareg?: Date,
      public paciente?: string,
      public medico?: string,
      public motivo?: string,
      public enfermedad?: string,
      public digestivo?: string,
      public cardio?: string,
      public respira?: string,
      public musculo?: string,
      public endocrino?: string,
      public neuro?: string,
      public urinario?: string,
      public hemato?: string,
      public otrosistem?: string,
      public antecetipo?: string,
      public antecefecha?: string,
      public antecedes?: string,
      public ta?: string,
      public pulso?: string,
      public fc?: string,
      public fr?: string,
      public tempera?: string,
      public peso?: string,
      public talla?: string,
      public imc?: string,
      public ca?: string,
      public fisicodesc?: string,
      public analisis?: string,
      public ciecodigo?: string,
      public cienombre?: string,
      public _id?: string
    ) { }
}