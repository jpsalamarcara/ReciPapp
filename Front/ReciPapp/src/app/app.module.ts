import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Components
import { ListMaterialComponent } from "../components/list-material/list-material";
import { AddressComponent } from "../components/address/address";

//Pages
import { MyApp } from './app.component';
import { PerfilPage } from "../pages/perfil/perfil";
import { GenHomePage } from "../pages/gen-home/gen-home";
import { GenLocationPage } from "../pages/gen-location/gen-location";
import { ProRecolectorsPage } from "../pages/pro-recolectors/pro-recolectors";
import { ProBuyPage } from "../pages/pro-buy/pro-buy";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConexionServiceProvider } from '../providers/conexion-service/conexion-service';
import { ConfigurationProvider } from '../providers/configuration/configuration';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { CtrlStorageProvider } from '../providers/ctrl-storage/ctrl-storage';

@NgModule({
  declarations: [
    MyApp,
    ListMaterialComponent,
    AddressComponent,
    PerfilPage,
    GenHomePage,
    ProRecolectorsPage,
    ProBuyPage,
    GenLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__dbReciPapp',
         driverOrder: ['indexeddb', 'websql', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilPage,
    GenHomePage,
    GenLocationPage,
    ProRecolectorsPage,
    ProBuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexionServiceProvider,
    ConfigurationProvider,
    CtrlStorageProvider
  ]
})
export class AppModule {}
