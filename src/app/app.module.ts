import { InjecterDirective } from './injecter.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FattureComponent } from './fatture/fatture.component';
import { FornitureComponent } from './forniture/forniture.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TabContentComponent } from './tab-content/tab-content.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FattureComponent,
    FornitureComponent,
    InjecterDirective,
    MenuComponent,
    TabContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
  ],
  entryComponents: [HomeComponent, FattureComponent, FornitureComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
