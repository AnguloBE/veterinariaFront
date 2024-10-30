import { Routes } from '@angular/router';
import { NuevaConsultaComponent } from './components/nueva-consulta/nueva-consulta.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { DetallesConsultaComponent } from './components/detalles-consulta/detalles-consulta.component';
import { EditarAnimalComponent } from './components/editar-animal/editar-animal.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EditarConsultaComponent } from './components/editar-consulta/editar-consulta.component';

export const routes: Routes = [
    { path: "", component: ConsultasComponent},
    { path: "consultas", component: ConsultasComponent},
    { path: "nuevaconsulta", component: NuevaConsultaComponent},
    { path: "detallesconsulta/:consultaId", component: DetallesConsultaComponent},
    { path: "editaranimal/:animalId", component: EditarAnimalComponent},
    { path: "editarcliente/:clienteId", component: EditarClienteComponent},
    { path: "editarconsulta/:consultaId", component: EditarConsultaComponent},

];
