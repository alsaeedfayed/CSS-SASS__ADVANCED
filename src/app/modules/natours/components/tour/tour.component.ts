import { Component } from '@angular/core';
import { PopupServiceService } from '../../../../shared/services/popup-service.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {

  constructor(private popUpService : PopupServiceService) { }

  openModal(event : any): void {
    event.preventDefault();
    this.popUpService.openModal();
  }

}
