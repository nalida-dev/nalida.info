import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NalidaStoryComponent } from './nalida-story/nalida-story.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NalidaStoryPostViewComponent } from './nalida-story/nalida-story-post-view/nalida-story-post-view.component';
import { IntroductionPostViewComponent } from './introduction/introduction-post-view/introduction-post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    IntroductionComponent,
    NalidaStoryComponent,
    ContactComponent,
    HeaderComponent,
    NalidaStoryPostViewComponent,
    IntroductionPostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
