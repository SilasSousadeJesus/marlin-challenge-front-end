import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingFullScreenComponent } from './components/loading-full-screen/loading-full-screen.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ListOfCategoriesComponent } from './components/list-of-categories/list-of-categories.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostCreationComponent } from './pages/post-creation/post-creation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingFullScreenComponent,
    ButtonComponent,
    CardComponent,
    InputSearchComponent,
    ListOfCategoriesComponent,
    PostDetailsComponent,
    PostCreationComponent,
    PostEditComponent,
    CardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
