import { Injectable } from '@angular/core';
import { MovieForm } from '../models/formModel';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private peliculas: MovieForm[] = [];
  private imagenNuevaPelicula = 'https://play-lh.googleusercontent.com/aBj8klZrQFm8fFYRsbC8Xa1H5TUk1J1SRYbcMAq0zBUF-pKfQ4eRKeHvjaC6ZNNIPB-S'; 

  constructor() {}

  getPeliculas(): MovieForm[] {
    return this.peliculas;
  }

  agregarPelicula(movie: MovieForm): void {
    this.peliculas.push(movie);
  }

  toggleFavorita(index: number): void {
    this.peliculas[index].isFavorite = !this.peliculas[index].isFavorite;
  }

  getImagenNuevaPelicula(): string {
    return this.imagenNuevaPelicula;
  }

  eliminarPelicula(index: number) {
    this.peliculas.splice(index, 1);
  }

}