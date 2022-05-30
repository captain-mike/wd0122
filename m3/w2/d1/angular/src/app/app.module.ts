import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitoloComponent } from './components/titolo/titolo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitoloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
