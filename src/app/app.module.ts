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
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { ShowPersonalizadoComponent } from './show-personalizado/show-personalizado.component';
import { ShowPrincipalComponent } from './show-principal/show-principal.component';
import { ShowRomanticoComponent } from './show-romantico/show-romantico.component';
import { ShowBohemioComponent } from './show-bohemio/show-bohemio.component';
import { ShowJuvenilComponent } from './show-juvenil/show-juvenil.component';
import { ShowRockAndSaxComponent } from './show-rock-and-sax/show-rock-and-sax.component';
import { ShowElectroComponent } from './show-electro/show-electro.component';
import { ShowJazzAndBluesComponent } from './show-jazz-and-blues/show-jazz-and-blues.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';

const routes: Routes = [
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'home', component: HomeComponent},
  { path: 'show-personalizado', component: ShowPersonalizadoComponent},
  { path: 'show-principal', component: ShowPrincipalComponent},
  { path: 'show-romantico', component: ShowRomanticoComponent},
  { path: 'show-bohemio', component: ShowBohemioComponent},
  { path: 'show-juvenil', component: ShowJuvenilComponent},
  { path: 'show-rock-and-sax', component: ShowRockAndSaxComponent},
  { path: 'show-electro', component: ShowElectroComponent},
  { path: 'show-jazz-and-blues', component: ShowJazzAndBluesComponent},
  { path: 'clases', component: ClasesComponent},
];

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
    TiposShowComponent,
    WhatsappButtonComponent,
    ShowPersonalizadoComponent,
    ShowPrincipalComponent,
    ShowRomanticoComponent,
    ShowBohemioComponent,
    ShowJuvenilComponent,
    ShowRockAndSaxComponent,
    ShowElectroComponent,
    ShowJazzAndBluesComponent,
    MenuComponent,
    HomeComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
