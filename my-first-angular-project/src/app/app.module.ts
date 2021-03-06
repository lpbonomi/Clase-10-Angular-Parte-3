import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PetFilterPipe } from './pets/pet-filter.pipe'

import { AppComponent }  from './app.component';
import { PetListComponent }  from './pets/pet-list.component';
import { StarComponent }  from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: 'pets', component: PetListComponent},
      { path: 'pets/:id', component: PetListComponent }, //esto sería otro componente!!!!!
      { path: 'welcome', component:  WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // configuramos la URL por defecto
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //cualquier otra ruta que no matchee, va a ir al WelcomeComponent, aca podría ir una pagina de error tipo 404 Not Found
      ])
   ],
  declarations: [ AppComponent, WelcomeComponent, PetListComponent,StarComponent, PetFilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
