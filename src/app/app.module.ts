import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from "@ionic-native/google-plus";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BeeperPage} from "../pages/beeper/beeper";
import { OneSignal } from '@ionic-native/onesignal';
import {HttpClientModule} from "@angular/common/http";
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeeperPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeeperPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
