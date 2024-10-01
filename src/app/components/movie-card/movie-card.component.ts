import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieForm } from '../../models/formModel';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() pelicula!: MovieForm;
  @Input() index!: number;
  @Output() toggleFavorita = new EventEmitter<number>();
  @Output() deleteMovie = new EventEmitter<number>();

  defaultImageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWWV_TzALxkkrkC-4yhP7_2DTYAa7N0cABg&s';

  onToggleFavorita() {
    this.toggleFavorita.emit(this.index);
  }

  onDeleteMovie() {
    this.deleteMovie.emit(this.index);
  }

  onImageError() {
    this.pelicula.imageUrl = this.defaultImageUrl;
  }
}