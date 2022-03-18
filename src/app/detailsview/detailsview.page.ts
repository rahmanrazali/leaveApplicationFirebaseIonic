import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/models/user.mode';
@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.page.html',
  styleUrls: ['./detailsview.page.scss'],
})
export class DetailsviewPage implements OnInit {
user = {} as User;
  constructor( private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    public router: Router
  ) { }

  ngOnInit() {
  }
async createUser(user: User){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("employee").add(user);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.router.navigateByUrl("maintain-staff");
    }
  }
  
  formValidation(){
    if(!this.user.name){
      this.showToast("Enter name");
      return false;
    }

    if(!this.user.department){
      this.showToast("Enter department");
      return false;
    }

    if(!this.user.role){
      this.showToast("Enter role");
      return false;
    }

    if(!this.user.phoneNumber){
      this.showToast("Enter phone number");
      return false;
    }

    if(!this.user.leaveBalance){
      this.showToast("Enter leave days allocated");
      return false;
    }

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

