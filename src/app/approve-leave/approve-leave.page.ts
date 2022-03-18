import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.page.html',
  styleUrls: ['./approve-leave.page.scss'],
})
export class ApproveLeavePage implements OnInit {
posts: any;
  id: any;
  constructor(private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private navCtrl: NavController ) {}

  ngOnInit() {
  }
ionViewWillEnter() {
    this.getPosts();
  }
  async getPosts(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("leave-request")
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          applicant: e.payload.doc.data()["applicant"],
          dateFrom: e.payload.doc.data()["dateFrom"],
          dateTo: e.payload.doc.data()["dateTo"],
          reason: e.payload.doc.data()["reason"],
          status: e.payload.doc.data()["status"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

  async approveLeave(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
  this.posts.status = "Approved";
  await this.firestore.doc("leave-request/" + id).update({status: this.posts.status});

  //dismiss loader
  (await loader).dismiss();

  this.navCtrl.navigateRoot("approve-leave");
  }

  async declineLeave(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
  this.posts.status = "Declined";
  await this.firestore.doc("leave-request/" + id).update({status: this.posts.status});

  //dismiss loader
  (await loader).dismiss();
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}