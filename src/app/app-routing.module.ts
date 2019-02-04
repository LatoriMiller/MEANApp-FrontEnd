import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: "/book", pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feature', component: FeatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
