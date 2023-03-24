import { Component } from '@angular/core';
import { movieGenre } from '../models/genre.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  genres: movieGenre[] = [
    {
      title: 'Comedies',
      image: {
        imageSrc: '../../assets/comedies-img.jpg',
        imageAlt: 'comedies-img',
      },
    },
    {
      title: 'Thrillers',
      image: {
        imageSrc: '../../assets/thrillers-img.jpg',
        imageAlt: 'thrillers-img',
      },
    },
    {
      title: 'Melodramas',
      image: {
        imageSrc: '../../assets/melodramas-img.jpg',
        imageAlt: 'melodramas-img',
      },
    },
    {
      title: 'Horrors',
      image: {
        imageSrc: '../../assets/horrors-img.jpg',
        imageAlt: 'horrors-img',
      },
    },
  ];
}
