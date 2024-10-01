export class MovieForm {
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  isFavorite: boolean; 

  constructor(year: number, title: string, description: string, imageUrl: string, isFavorite: boolean = false) {
    this.year = year;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.isFavorite = isFavorite; 
  }
}