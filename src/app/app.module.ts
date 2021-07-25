import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PodcastComponent } from './podcast/podcast.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SafeurlPipe } from './pipes/safeurl.pipe';
import { TiposShowComponent } from './tipos-show/tipos-show.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    GaleriaComponent,
    ContactenosComponent,
    SobreMiComponent,
    ComentariosComponent,
    PodcastComponent,
    ServiciosComponent,
    SafeurlPipe,
    TiposShowComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
