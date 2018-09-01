import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MedicosProvider } from '../providers/medicos/medicos';

@Component({
  templateUrl: 'app.html',
  providers:[
    MedicosProvider
  ]
})
export class MyApp {
  rootPage:any = HomePage;
  
  public listaDeMoedas = new Array<any>();


  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public medicosProvider: MedicosProvider) {
                console.log("construiu");
                this.ionViewDidLoad();
    
  }

  ionViewDidLoad() {
    console.log("entrou...");
    
    

    this.medicosProvider.getMoedas().subscribe(

      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        this.listaDeMoedas = obj.data;
        console.log(obj.data); 
      },
      error => {
        console.log(error);
      }
    )
    
  }
  

  
}

