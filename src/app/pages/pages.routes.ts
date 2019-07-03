import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { ProfileComponent } from './profile/profile.component';

// Guards
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard, VerificaTokenGuard } from '../services/service.index';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './pacientes/paciente.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaComponent } from './historias/historia.component';


const pagesRoutes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [ VerificaTokenGuard ],
    data: { titulo: 'Dashboard' } 
  },
  { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
  { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
  { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
  { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
  { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
  
  // Mantenimientos
  { 
    path: 'usuarios', 
    component: UsuariosComponent,
    canActivate: [ AdminGuard ],
    data: { titulo: 'Administración de Usuarios' } 
  },
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Administración de Hospitales' } },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Administración de Médicos' } },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
  { path: 'pacientes', component: PacientesComponent, data: { titulo: 'Administración de Pacientes' } },
  { path: 'paciente/:id', component: PacienteComponent, data: { titulo: 'Actualizar Paciente' } },
  { path: 'historias/:paciente', component: HistoriasComponent, data: { titulo: 'Administración de Historias Clinicas' } },
  { path: 'historia/:id', component: HistoriaComponent, data: { titulo: 'Actualizar Historia' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
