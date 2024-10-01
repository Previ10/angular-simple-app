import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas_service';
import { MovieForm } from '../../models/formModel';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [CommonModule, MovieCardComponent],
  standalone: true,
})
export class MovieListComponent {
  peliculas: MovieForm[] = [];

  constructor(private peliculasService: PeliculasService) {
    this.peliculas = this.peliculasService.getPeliculas();
  }

  toggleFavorita(index: number) {
    this.peliculasService.toggleFavorita(index);
  }


  eliminarPelicula(index: number) {
    this.peliculasService.eliminarPelicula(index);
    this.peliculas = this.peliculasService.getPeliculas();
  }
}

