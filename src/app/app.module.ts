import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { S1Component } from './services/s1/s1.component';
import { S2Component } from './services/s2/s2.component';
import { S3Component } from './services/s3/s3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    PagenotfoundComponent,
    S1Component,
    S2Component,
    S3Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(
      [
        {path:'',component: HomeComponent},
        {path:'home',component: HomeComponent},
        {path:'about',component: AboutComponent},
        {path:'services',component: ServicesComponent,
                children:[{path:'s1',component: S1Component},
                          {path:'s2',component: S2Component},
                          {path:'s3',component: S3Component} ]
        },
        {path:'blog',component: BlogComponent},
        {path:'contact',component: ContactComponent},
        {path:'',redirectTo:'/about',pathMatch:"prefix"},
        {path:'**',component:PagenotfoundComponent }
      ]
    )
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
