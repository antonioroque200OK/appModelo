import { HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Post} from 'src/services/post';

import { HttpClientModule } from '@angular/common/http';
import { Post } from 'src/services/post';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, Injectable],
  providers: [Post, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [Post, NativeStorage { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
>>>>>>> 37eb65933db83225e8c8573fc6e29e3eff1a963e
  bootstrap: [AppComponent],
})
export class AppModule {}
