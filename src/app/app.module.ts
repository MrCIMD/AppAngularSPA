// Modueles
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes';
// Compoenntes
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/foorter.component';
import { ListComponent } from './components/list/list.component';
// Pipe
import { MiPipePipe } from './pipes/mipipe.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    // Pipes
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
