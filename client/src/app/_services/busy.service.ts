import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
busyRequestCont=0;
  constructor(private spinnerService:NgxSpinnerService) { }
  busy()
  {
    this.busyRequestCont++;
    this.spinnerService.show(undefined,{
      type:'line-scale-party',
      bdColor:'rgba(255,255,255,0)',
      color:'#333333'
    });
  }

  idle()
  {
    this.busyRequestCont--;
    if(this.busyRequestCont<=0)
    {
      this.busyRequestCont=0;
      this.spinnerService.hide();
    }
  }
}
