import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { InformacioComponent } from './informacio/informacio.component';
import { InstalacionsComponent } from './instalacions/instalacions.component';



export const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'informacio',
  component: InformacioComponent
},
{
  path: 'instalacions',
  component: InstalacionsComponent
},
{
  path: 'usuaris',
  component: CardComponent
}



];
