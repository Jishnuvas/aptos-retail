import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AptosDropdownComponent } from '../aptos-dropdown/aptos-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AptosDropdownComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
