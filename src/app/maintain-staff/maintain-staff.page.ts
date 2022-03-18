import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, NavParams } from '@ionic/angular';
import { LoadingController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/models/user.mode';

@Component({
  selector: 'app-maintain-staff',
  templateUrl: './maintain-staff.page.html',
  styleUrls: ['./maintain-staff.page.scss'],
})
export class MaintainStaffPage implements OnInit {

user: any;
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
      this.firestore.collection("employee").snapshotChanges().subscribe(data => {
        this.user = data.map(e => {
          return {
            id: e.payload.doc.id,
            department: e.payload.doc.data["department"],
            email: e.payload.doc.data()["email"],
            leaveBalance: e.payload.doc.data()["leaveBalance"],
            name: e.payload.doc.data()["name"],
            phoneNumber: e.payload.doc.data()["phoneNumber"],
            
            role: e.payload.doc.data["role"]
            
            
          }
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