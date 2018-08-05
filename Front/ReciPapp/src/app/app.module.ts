import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Components
import { ListMaterialComponent } from "../components/list-material/list-material";

import { MyApp } from './app.component';
import { PerfilPage } from "../pages/perfil/perfil";
import { GenHomePage } from "../pages/gen-home/gen-home";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConexionServiceProvider } from '../providers/conexion-service/conexion-service';
import { ConfigurationProvider } from '../providers/configuration/configuration';

@NgModule({
  declarations: [
    MyApp,
    ListMaterialComponent,
    PerfilPage,
    GenHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilPage,
    GenHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexionServiceProvider,
    ConfigurationProvider
  ]
})
export class AppModule {}
