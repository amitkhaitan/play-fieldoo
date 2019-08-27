import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { metaReducers, reducers } from './store';
import { environment } from '../environments/environment';
import { LayoutEffects } from './store/layout/layout.effects';
import { HttpService } from './services/http.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { interval } from 'rxjs';
import { PlayComponent } from './play/play.component';
import { TrialsComponent } from './trials/trials.component';
import { FacesComponent } from './faces/faces.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    TrialsComponent,
    FacesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MatSnackBarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([
      LayoutEffects,
    ]),
    
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('./sw.js', { enabled: environment.production }),
    ServiceWorkerModule.register('/sw.js', { enabled: environment.production }),
    ServiceWorkerModule.register('sw.js', { enabled: environment.production }),
    



    

      
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { 
  constructor(update: SwUpdate, push: SwPush, snackbar: MatSnackBar) {
  if(update.isEnabled){
    interval(6*60*60).subscribe(()=>{
    update.available.subscribe((event) => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);       
     
      update.activateUpdate().then(()=>{
      const snack = snackbar.open('Update Available', 'Reload');
      snack.onAction().subscribe(() => {
      window.location.reload();
      });
      })
    });

    update.activated.subscribe(event=>{
      console.log("Old Version was: ", event.previous);
      console.log("New Versio is: ", event.current);
    })
    })

  }
}
}

