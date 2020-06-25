import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { PicContentComponent } from './pic-content/pic-content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutflipcartComponent } from './aboutflipcart/aboutflipcart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MegamenuComponent,
    PicContentComponent,
    FooterComponent,
    AboutflipcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
