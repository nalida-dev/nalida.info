import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NalidaStoryComponent } from './nalida-story/nalida-story.component';
import { ContactComponent } from './contact/contact.component';
import { NalidaStoryPostViewComponent } from './nalida-story/nalida-story-post-view/nalida-story-post-view.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'intro', component: IntroductionComponent },
  { path: 'nalida-story', component: NalidaStoryComponent },
  { path: 'nalida-story/tags/:tags', component: NalidaStoryComponent },
  { path: 'nalida-story/post/:postId', component: NalidaStoryPostViewComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
