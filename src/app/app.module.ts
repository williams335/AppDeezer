import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListartistsPage } from '../pages/listartists/listartists';
import { ListalbumsPage } from '../pages/listalbums/listalbums';
import { PlaylistsPage } from '../pages/playlists/playlists';


//Service
import { ServicesdeezerProvider } from '../providers/servicesdeezer/servicesdeezer';

//Modules
import {  HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';

//Native
import { Media } from '@ionic-native/media';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListartistsPage,
    ListalbumsPage,
    PlaylistsPage
  ],
  imports: [
    HttpClientJsonpModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListartistsPage,
    ListalbumsPage,
    PlaylistsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesdeezerProvider
  ]
})
export class AppModule {}
