import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PeliculasService } from '../../../services/peliculas_service';
import { MovieForm } from '../../../models/formModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'] 
})
export class FormComponentComponent {

  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private peliculasService: PeliculasService) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1900)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      imageUrl: ['', [Validators.required, Validators.maxLength(30000)]],

    });
  }

 agregarPelicula() {
  if (this.movieForm.valid) {
    const { title, year, description, imageUrl } = this.movieForm.value;
    const nuevaPelicula = new MovieForm(
      year,
      title,
      description,
      imageUrl, 
      false 
    );
    this.peliculasService.agregarPelicula(nuevaPelicula);
    this.movieForm.reset();
  }
}

  eliminarPelicula(index: number) {
    this.peliculasService.eliminarPelicula(index);
  }

  get title() {
    return this.movieForm.get('title');
  }

  get year() {
    return this.movieForm.get('year');
  }

  get description() {
    return this.movieForm.get('description');
  }
}