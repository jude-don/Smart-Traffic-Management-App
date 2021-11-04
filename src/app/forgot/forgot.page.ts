import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth, AngularFireAuthModule  } from '@angular/fire/auth';



@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  image: number;
  constructor(
    public router: Router,
    private fireauth: AngularFireAuth,
    public alertController: AlertController,
    private toastController: ToastController,
    public loadingController: LoadingController,
  ) {}

  ngOnInit() {
  }
  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }
  recover(){
    this.fireauth.auth.sendPasswordResetEmail(this.email)
    .then(data => {
      console.log(data);
      this.presentToast('Password reset email sent', false, 'bottom', 1000);
      this.router.navigateByUrl('/login');
    })
    .catch(err => {
      console.log(` failed ${err}`);
      this.error = err.message;
    });
}
async presentToast(message, buttons, position, duration) {
  const toast = await this.toastController.create({
    message: message,
    buttons: [
      {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ],
    position: position,
    duration: duration
  });
  toast.present();
}

}
