import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { HttpModule } from '@angular/http';
// imports Angular "core" above and my stuff below
import { AppComponent } from './app.component';

// TypeDecorator
@NgModule({
  declarations: [
    AppComponent
  ], // declaring my app.component
  imports: [
    BrowserModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)]
    HttpModule
  ], // importing Modules from Angular "core"
  providers: [],
  bootstrap: [AppComponent]
})

// export class
export class AppModule { 
  // no code yet
}
