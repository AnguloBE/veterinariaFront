import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AnimalPorIdService } from '../../services/animal-por-id.service';
import { ActualizarAnimalService } from '../../services/actualizar-animal.service';
import { Animal } from '../../common/animal';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-editar-animal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-animal.component.html',
  styleUrl: './editar-animal.component.css'
})
export class EditarAnimalComponent {

  mensaje: string = "";
  tipoMensaje: string = "";
  animal: Animal = new Animal();
  animalId: number = 0;

  animalForm!: FormGroup;

 constructor(
    private formBuilder: FormBuilder,
    private animalPorIdService: AnimalPorIdService,
    private actualizarAnimalService: ActualizarAnimalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerAnimal();

    this.iniciarFormulario();

    
  }

  iniciarFormulario() {

    this.animalForm = this.formBuilder.group({
      nombre: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      raza: new FormControl(''),
      color: new FormControl('')
    });
  }

  async obtenerAnimal() {
    this.animalId = +this.route.snapshot.paramMap.get('animalId')!;

    try {
      this.animal = await this.animalPorIdService.obtenerAnimal(this.animalId);
      this.animalForm.get('nombre')?.setValue(this.animal.nombre);
      this.animalForm.get('fechaNacimiento')?.setValue(this.animal.fechaNacimiento);
      this.animalForm.get('raza')?.setValue(this.animal.raza);
      this.animalForm.get('color')?.setValue(this.animal.color);
      console.log(this.animal.nombre);
    } catch (error) {
      console.error('Error al obtener el animal:', error);
    }
  }

  onSubmit() {

    this.animal.nombre = this.animalForm.get('nombre')?.value; 
    this.animal.fechaNacimiento = this.animalForm.get('fechaNacimiento')?.value; 
    this.animal.raza = this.animalForm.get('raza')?.value; 
    this.animal.color = this.animalForm.get('color')?.value; 

    this.actualizarAnimalService.actualizarAnimal(this.animal).subscribe({
      next: response => {
        this.mensaje = response.mensaje;
        console.log(this.mensaje);
        this.tipoMensaje = 'bien';
      },
      error: err => {
        this.mensaje = "Error al actualizar la mascota, intenta de nuevo";
        this.tipoMensaje = 'error';
      }
    });
  }
}