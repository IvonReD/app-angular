import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { BitcoinPageComponent } from './bitcoin-page/bitcoin-page.component';



const appRoutes: Routes = [
  {path: 'home-page' , component: HomePageComponent},
  {path: 'todo-page' , component: TodoPageComponent},
  {path: 'bitcoin-page' , component: BitcoinPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomePageComponent,
    TodoPageComponent,
    BitcoinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
   
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
