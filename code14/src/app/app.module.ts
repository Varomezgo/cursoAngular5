import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DirectivangforComponent } from './directivangfor/directivangfor.component';
import { DirectivangifComponent } from './directivangif/directivangif.component';
import { DirectivangswitchComponent } from './directivangswitch/directivangswitch.component';
import { DirectivangclassComponent } from './directivangclass/directivangclass.component';
import { DirectivangstyleComponent } from './directivangstyle/directivangstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivangforComponent,
    DirectivangifComponent,
    DirectivangswitchComponent,
    DirectivangclassComponent,
    DirectivangstyleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
