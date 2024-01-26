import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { InformacioComponent } from './informacio/informacio.component';
import { InstalacionsComponent } from './instalacions/instalacions.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { PrivateComponent } from './private/private.component';



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
  path: 'login',
  component: LoginComponent
},
{
path: 'forgot-password',
component: ForgotPasswordComponent
},
{
path: 'contact',
component: ContactComponent
},
{
path: 'private',
component: PrivateComponent,
canActivate: [AuthGuard]
},
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
},
{
  path: 'payments',
  component: PaymentsComponent,
  canActivate: [AuthGuard]
}




];
