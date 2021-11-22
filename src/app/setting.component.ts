import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, } from '@ionic/angular';
import { HostManagerService } from './host-manager.service';
import { WaitingList } from './models/waitingList';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  list: WaitingList;
  constructor(
    private popoverController: PopoverController,
    private hostManagerService: HostManagerService,
    private toast: ToastController)
    { }

  ngOnInit() {
  }

  exit(){
    this.popoverController.dismiss(false);
  }

  cancelVisit() {
    this.list.clientStatusId = 4;

    this.hostManagerService.updateWaitingList(this.list).subscribe(async (response:any)=>{

      const toast = await this.toast.create({
        message: response.message,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    })
    this.popoverController.dismiss(true);
  }
}