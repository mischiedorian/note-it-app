import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {NotesComponent} from './notes/notes.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: '',
    component: NotesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // forms module need to be imported to be able to use form
    RouterModule.forRoot(appRoutes)
  // {enableTracing: true} is used for logs in consola
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
