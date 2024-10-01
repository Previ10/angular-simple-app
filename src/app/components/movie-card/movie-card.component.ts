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


  onToggleFavorita() {
    this.toggleFavorita.emit(this.index);
  }
  onDeleteMovie(){
    this.deleteMovie.emit(this.index);
  }
}