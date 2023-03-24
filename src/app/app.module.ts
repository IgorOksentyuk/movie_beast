import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from './carousel/carousel.module';
import { GenresComponent } from './genres/genres.component';
import { GenresModule } from './genres/genres.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, CarouselModule, GenresModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
