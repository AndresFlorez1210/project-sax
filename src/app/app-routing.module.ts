import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { HomeComponent } from './home/home.component';
import { ShowBohemioComponent } from './show-bohemio/show-bohemio.component';
import { ShowElectroComponent } from './show-electro/show-electro.component';
import { ShowJazzAndBluesComponent } from './show-jazz-and-blues/show-jazz-and-blues.component';
import { ShowJuvenilComponent } from './show-juvenil/show-juvenil.component';
import { ShowPersonalizadoComponent } from './show-personalizado/show-personalizado.component';
import { ShowPrincipalComponent } from './show-principal/show-principal.component';
import { ShowRockAndSaxComponent } from './show-rock-and-sax/show-rock-and-sax.component';
import { ShowRomanticoComponent } from './show-romantico/show-romantico.component';

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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
