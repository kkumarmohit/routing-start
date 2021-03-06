import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { UserComponent } from "./users/user/user.component";
import { RouterModule } from '@angular/router';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserComponent, children: 
    [
      { path: 'users/:id/:name', component: UserComponent }  
    ] 
    },
    { path: 'servers', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: ServerComponent, children: 
    [
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
      { path: ':id/', component: ServerComponent } 
    ] 
    },
    //{ path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    { path: 'something', redirectTo: '/not-found'}
    
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}