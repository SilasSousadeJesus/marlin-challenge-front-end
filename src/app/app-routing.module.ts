import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostCreationComponent } from './pages/post-creation/post-creation.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'creation',
    component: PostCreationComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: PostEditComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
