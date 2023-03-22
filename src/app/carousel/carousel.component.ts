import { Component, Input } from '@angular/core';
import { carouselImage } from '../models/carouselImage.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  selectedIndex = 0;
  @Input() dots = true;

  images: carouselImage[] = [
    {
      imageSrc: '../../assets/django.jpg',
      imageAlt: 'django',
    },
    {
      imageSrc: '../../assets/harry_potter.jpg',
      imageAlt: 'harry_potter',
    },
    {
      imageSrc: '../../assets/wolf.jpg',
      imageAlt: 'wolf',
    },
  ];

  //select image clicking on dot
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    this.selectedIndex === this.images.length - 1
      ? (this.selectedIndex = 0)
      : this.selectedIndex++;
  }
}
