import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from 'src/models/post.mode';

@Component({
  selector: 'app-approval-status',
  templateUrl: './approval-status.page.html',
  styleUrls: ['./approval-status.page.scss'],
})
export class ApprovalStatusPage implements OnInit {
post = {} as Post;
  id: string;

  constructor( private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController ) { this.id = this.actRoute.snapshot.paramMap.get("id");}

  ngOnInit() { this.getPostById(this.id)
  }
async getPostById(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
 
  this.firestore.doc("leave-request/" + id)
  .valueChanges()
  .subscribe(data => {
    this.post.dateFrom = data["dateFrom"];
    this.post.dateTo = data["dateTo"];
    this.post.reason = data["reason"];
    this.post.status = data["status"];
  });
  //dismiss loader
  (await loader).dismiss();
  }
 
  async approveLeave(post: Post){
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("leave-request/" + this.id).update({status: this.post.status});
      } catch(e){
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
  
      //redirect to view post page
      this.navCtrl.navigateRoot("view-leave-request");
      }
  }
 
  formValidation(){
    

    this.post.status = "approved";
    return true;
  }
 async declineLeave(post: Post){
    if(this.formValidation1()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("leave-request/" + this.id).update({status: this.post.status});
      } catch(e){
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
  
      //redirect to view post page
      this.navCtrl.navigateRoot("view-leave-request");
      }
  }
 
  formValidation1(){
    

    this.post.status = "declined";
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
