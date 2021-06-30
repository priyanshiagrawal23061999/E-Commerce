import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GlobalRoutingModule } from './global-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class GlobalModule { }
