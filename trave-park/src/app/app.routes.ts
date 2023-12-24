import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformacioComponent } from './informacio/informacio.component';
import { InstalacionsComponent } from './instalacions/instalacions.component';
import { UsersComponent } from './users/users.component';



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
  component: UsersComponent
}



];
