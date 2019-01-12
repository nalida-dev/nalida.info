import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MembersComponent } from './members/members.component';
import { NalidaStoryComponent } from './nalida-story/nalida-story.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'members', component: MembersComponent },
  { path: 'nalida-story', component: NalidaStoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
