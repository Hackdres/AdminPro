export class Paciente {

  constructor (
    public nombre?: string,
    public tipodocumento?: string,
    public documento?: string,
    public nacimiento?: Date,
    public edad?: number,
    public genero?: string,
    public direccion?: string,
    public barrio?: string,
    public telefono?: number,
    public telefono2?: number,
    public entidad?: string,
    public usuario?: string,
    public _id?: string
  ) { }
}