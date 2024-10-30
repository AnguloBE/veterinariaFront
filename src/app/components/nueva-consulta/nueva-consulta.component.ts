import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Animal } from '../../common/animal';
import { Cliente } from '../../common/cliente';
import { Consulta } from '../../common/consulta';
import { Ingreso } from '../../common/ingreso';
import { SubirConsultaService } from '../../services/subir-consulta.service';

@Component({
  selector: 'app-nueva-consulta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nueva-consulta.component.html',
  styleUrl: './nueva-consulta.component.css'
})
export class NuevaConsultaComponent {

  ingresoForm!: FormGroup;
  mensaje: String = "";
  tipoMensaje: String = "";

  constructor (
    private formBuilder: FormBuilder,
    private subirConsultaServicio: SubirConsultaService) {

    
  }

  ngOnInit(): void {

    this.ingresoForm = this.formBuilder.group({

      animalForm: this.formBuilder.group({
        nombre: new FormControl(''),
        fechaNacimiento: new FormControl(''),
        raza: new FormControl(''),
        color: new FormControl('')

      }),

      clienteForm: this.formBuilder.group({
        nombre: new FormControl(''),
        numeroTelefono: new FormControl(''),
        direccion: new FormControl('')

      }),

      consultaForm: this.formBuilder.group({
        razonIngreso: new FormControl(''),
        detallesConsulta: new FormControl(''),
        importe: new FormControl('')

      })
    });
  }

  onSubmit() {

    let animal = new Animal();
    let cliente = new Cliente();
    let consulta = new Consulta();

    animal = this.ingresoForm.get('animalForm')?.value;
    cliente = this.ingresoForm.get('clienteForm')?.value;
    consulta = this.ingresoForm.get('consultaForm')?.value;

    let ingreso = new Ingreso();

    ingreso.animal = animal;
    ingreso.cliente = cliente;
    ingreso.consulta = consulta;

    this.subirConsultaServicio.subirConsulta(ingreso).subscribe({
      next: response => {
        this.mensaje = response.mensaje;
        this.tipoMensaje = 'bien';
        this.ingresoForm.reset();
        
      },
      error: err => {
        this.mensaje = "Error al subit la consulta, intenta de nuevo";
        this.tipoMensaje = 'error';
      }
    });

    console.log(`Mensaje: ${this.mensaje}, Tipo de mensaje: ${this.tipoMensaje}`)
    

  }



}
