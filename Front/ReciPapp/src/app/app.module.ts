import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 

//Components
import { ListMaterialComponent } from "../components/list-material/list-material";
import { AddressComponent } from "../components/address/address";

//Pages
import { MyApp } from './app.component';
import { PerfilPage } from "../pages/perfil/perfil";
import { GenHomePage } from "../pages/gen-home/gen-home";
import { GenBidPage } from '../pages/gen-bid/gen-bid';
import { ProRecolectorsPage } from "../pages/pro-recolectors/pro-recolectors";
import { ProBuyPage } from "../pages/pro-buy/pro-buy";
import { RecHomePage } from "../pages/rec-home/rec-home";
import { RecOffersPage } from "../pages/rec-offers/rec-offers";
import { RecPendingPage } from "../pages/rec-pending/rec-pending";
import { RecConfirmationPage } from "../pages/rec-confirmation/rec-confirmation";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConexionServiceProvider } from '../providers/conexion-service/conexion-service';
import { ConfigurationProvider } from '../providers/configuration/configuration';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { CtrlStorageProvider } from '../providers/ctrl-storage/ctrl-storage';
import { GenBusinessProvider } from '../providers/gen-business/gen-business';


@NgModule({
  declarations: [
    MyApp,
    ListMaterialComponent,
    AddressComponent,
    PerfilPage,
    GenHomePage,
    GenBidPage,
    ProRecolectorsPage,
    ProBuyPage,    
    RecHomePage,
    RecOffersPage,
    RecPendingPage,
    RecConfirmationPage
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
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
    GenBidPage,
    ProRecolectorsPage,
    ProBuyPage,
    RecHomePage,
    RecOffersPage,
    RecPendingPage,
    RecConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexionServiceProvider,
    ConfigurationProvider,
    CtrlStorageProvider,
    GenBusinessProvider
  ]
})
export class AppModule {}
