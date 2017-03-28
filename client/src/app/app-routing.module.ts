import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUserComponent } from './new-user/new-user.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
	{ path: 'sign-up', component: NewUserComponent },
  { path: 'sign-in', component: NewUserSessionComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class HomeLibraryRoutingModule {}

