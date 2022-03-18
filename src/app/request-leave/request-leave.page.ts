import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { getAuth } from '@firebase/auth';

import { Post } from 'src/models/post.mode';
import { User } from 'src/models/user.mode';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.page.html',
  styleUrls: ['./request-leave.page.scss'],
})
export class RequestLeavePage implements OnInit {
post = {} as Post;
user = getAuth().currentUser;
  constructor(
  private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
) { }

  ngOnInit() {
  }
async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("leave-request").add(post);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("home");
    }
  }
  
  formValidation(){
    if(!this.post.dateFrom){
      this.showToast("Enter start date");
      return false;
    }

    if(!this.post.dateTo){
      this.showToast("Enter end date");
      return false;
    }

    if(!this.post.reason){
      this.showToast("Enter reason");
      return false;
    }

    if(!this.post.applicant){
      this.showToast("Enter name");
      return false;
    }
      this.post.status = "pending";
    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }

}
