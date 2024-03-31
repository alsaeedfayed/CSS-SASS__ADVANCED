import { Component } from '@angular/core';
import { PopupServiceService } from '../services/popup-service.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  constructor(private popupService: PopupServiceService) { }

  closeModal(event : any){
    event.preventDefault();
    this.popupService.closeModal();
  }

}
