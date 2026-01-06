import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing-module';
import { MaterialModule } from './shared/material.module';


import { App } from './app';
import { Navbar } from './components/core/navbar/navbar';
import { Footer } from './components/core/footer/footer';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Home,
    About,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class materialModule { }
