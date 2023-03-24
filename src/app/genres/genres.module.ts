import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';

@NgModule({
  declarations: [GenresComponent],
  imports: [CommonModule],
  exports: [GenresComponent],
})
export class GenresModule {}
