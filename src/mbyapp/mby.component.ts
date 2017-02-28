import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: 'mbyapp/mby.html',
  styles: ['.blue-bg{background-color:blue;}'],
})
export class MonComposant  {

  private nbClick = 0

  private userName:string = "Brice"
  private aUser:User = {username:"Raoul", email:"raoul@sgcib.com"}

  private hideEmail:boolean = false

  private disabledInput:boolean = false

  private isBluebg:boolean = true

  private bgColor:string = 'red'



  private isDisabled():boolean{
    return this.disabledInput;
  }

  private getUsername():string{
    return this.aUser.username
  }

  private toggle(){
    this.hideEmail = !this.hideEmail
    this.nbClick++
  }
}

interface User{
  username:string,
  email:string
}
