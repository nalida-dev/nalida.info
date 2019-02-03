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
import { NalidaStoryPostPreviewComponent } from './nalida-story/nalida-story-post-preview/nalida-story-post-preview.component';
import { IntroductionPostPreviewComponent } from './introduction/introduction-post-preview/introduction-post-preview.component';
import { NalidaStoryPostViewComponent } from './nalida-story/nalida-story-post-view/nalida-story-post-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    IntroductionComponent,
    NalidaStoryComponent,
    ContactComponent,
    HeaderComponent,
    NalidaStoryPostPreviewComponent,
    IntroductionPostPreviewComponent,
    NalidaStoryPostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
