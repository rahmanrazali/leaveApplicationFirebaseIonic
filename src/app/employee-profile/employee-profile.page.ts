import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, NavParams } from '@ionic/angular';
import { LoadingController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/models/user.mode';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
})
export class EmployeeProfilePage implements OnInit {
users: any;
id: any;
constructor( 
    public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore

  ) { }

  ngOnInit() {
  }
ionViewWillEnter() {
    this.getUsers();
  }
  async getUsers(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("employee")
    .snapshotChanges()
    .subscribe(data => { 
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          department: e.payload.doc.data()["department"],
          email: e.payload.doc.data()["email"],
          name: e.payload.doc.data()["name"],
          phoneNumber: e.payload.doc.data()["phoneNumber"],
          role: e.payload.doc.data()["role"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

 
  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  
  }
}
