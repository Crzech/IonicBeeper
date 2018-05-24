import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the BeeperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beeper',
  templateUrl: 'beeper.html',
})
export class BeeperPage {

  message: any ='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeeperPage');
  }
  sendNotificationwithImage() {
    let msg = this.message;
    let rest = this.rest;
    let notificationObj = {
      included_segments:["All"],
      app_id:'8380f62f-aee6-4a36-b65e-42bb4350efff',
      contents:{en:msg}
    };
    rest.createNotification(notificationObj)
      .then(data => {
        let toast = this.toastCtrl.create({
          message: 'Notificacion enviada correctamente',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      })
      .catch(error => {
        let toast = this.toastCtrl.create({
          message: 'Tuvimos algunos problemas de conexion, inténtalo de nuevo',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });
  }

}
