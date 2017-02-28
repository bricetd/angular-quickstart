import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MonComposant }  from './mby.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MonComposant ],
  bootstrap:    [ MonComposant ]
})
export class MonModule { }
