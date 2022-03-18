import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from 'src/models/post.mode';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.page.html',
  styleUrls: ['./edit-request.page.scss'],
})
export class EditRequestPage implements OnInit {
post = {} as Post;
  id: any;

  constructor( private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController

  ) { this.id = this.actRoute.snapshot.paramMap.get("id");}

  ngOnInit() { this.getPostById(this.id);
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
  });
  //dismiss loader
  (await loader).dismiss();
  }
 
  async updatePost(post: Post){
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("leave-request/" + this.id).update(post);
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

