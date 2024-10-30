import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Ingreso } from '../../common/ingreso';
import { ObtenerConsultasService } from '../../services/obtener-consultas.service';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {

  ingresos: Ingreso[] = [];

  constructor(
    private obtenerConsultasServicio: ObtenerConsultasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listaIngresos();
  }

  listaIngresos(){

    this.obtenerConsultasServicio.ObtenerConsultas().subscribe(
      ingresos => {
        this.ingresos = ingresos;
      }
    );

  }

}
