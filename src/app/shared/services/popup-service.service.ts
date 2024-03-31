import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {

  constructor() { }


  openModal(){
    (document?.getElementById('popup')!).style.visibility = 'visible';
    (document?.getElementById('popup')!).style.opacity = "1";
    (document?.getElementById('popup-content')!).style.transform = "translate(-50%, -50%) scale(1)"
  }

  closeModal(){
    (document?.getElementById('popup')!).style.visibility = 'hidden';
    (document?.getElementById('popup')!).style.opacity = "0";
    (document?.getElementById('popup-content')!).style.transform = "translate(-50%, -50%) scale(.5)"
  }

}
