import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ConsultaPorIdService } from '../../services/consulta-por-id.service';
import { Ingreso } from '../../common/ingreso';
import { EliminarConsultaService } from '../../services/eliminar-consulta.service';
import { Animal } from '../../common/animal';


@Component({
  selector: 'app-detalles-consulta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalles-consulta.component.html',
  styleUrl: './detalles-consulta.component.css'
})
export class DetallesConsultaComponent {

  mostrarToast: boolean = false;
  eliminacionExitosa: boolean = true;
  mensajeToast: string = "";

  consultaId: number = 0;
  ingreso: Ingreso = new Ingreso();

  constructor(
    private route: ActivatedRoute, 
    private detallesPorIdServicio: ConsultaPorIdService,
    private eliminarConsultaServicio: EliminarConsultaService,
    private router: Router ) {}

  ngOnInit(): void {
    
    this.obtenerIngreso();

  }

  async obtenerIngreso(): Promise<void> {
    this.consultaId =+ this.route.snapshot.paramMap.get('consultaId')!;

    try{
      this.ingreso = await this.detallesPorIdServicio.obtenerConsulta(this.consultaId)!;
    }
    catch (error) {

    }

  }

  eliminarConsulta(consultaId: number) {

    this.eliminarConsultaServicio.eliminarConsulta(consultaId).subscribe({
      next: response => {
        this.mensajeToast = 'Consulta eliminada exitosamente';
        this.eliminacionExitosa = true;
        this.mostrarToast = true;
        setTimeout(() => {
          this.router.navigate(['/consultas']);
      }, 2000);
      },
      error: err => {
        this.mensajeToast = 'Error al eliminar la consulta';
        this.eliminacionExitosa = false;
        this.mostrarToast = true;
        setTimeout(() => this.mostrarToast = false, 3000);
      }

    });

  }

  ocultarToast() {
    this.mostrarToast = false;
  }

}
