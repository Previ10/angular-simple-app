import { Component } from '@angular/core';
import { FormComponentComponent } from './components/formComponents/form-component/form-component.component';
import { MovieListComponent } from './components/movie-list/movie-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponentComponent, MovieListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';
}