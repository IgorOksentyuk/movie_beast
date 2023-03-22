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
  @Input() autoSlide = false;
  @Input() sliderInterval = 3000;
  timer: number;

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

  ngOnInit(): void {
    if (this.autoSlide) {
      this.startSlide();
    }
  }

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

  startSlide() {
    this.timer = window.setInterval(() => {
      this.onNextClick();
    }, this.sliderInterval);
  }

  stopSlide() {
    clearInterval(this.timer);
  }
}
