import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxChiptanModule } from '../../../ngx-chiptan/src/lib/ngx-chiptan.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxChiptanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
