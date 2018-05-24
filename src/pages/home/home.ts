
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from "@ionic-native/google-plus";
import {BeeperPage} from "../beeper/beeper";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isUserLoggedIn: any = false;
  userInfo: any = {};

  constructor(public navCtrl: NavController, public gp: GooglePlus) {

  }
  loginWithGP(){
    this.gp.login({}).then(res => {
      this.userInfo = res;
      this.isUserLoggedIn = true;
    }).catch(err => console.log('error',err));
  }
  gotoBeeper(){
    this.navCtrl.push(BeeperPage);
  }

  logout(){
    this.gp.logout().then(()=>{
      this.isUserLoggedIn = false;
    });
  }
}
