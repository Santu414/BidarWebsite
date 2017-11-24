import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    ActivitiesComponent,
    GalleryComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'contactus', component: ContactusComponent },
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
