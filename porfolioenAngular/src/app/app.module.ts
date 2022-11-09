import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaLabComponent } from './componentes/experiencia-lab/experiencia-lab.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LogoArgProgComponent, SocialComponent, BannerComponent, AcercaDeComponent, ExperienciaLabComponent, EducacionComponent,],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
