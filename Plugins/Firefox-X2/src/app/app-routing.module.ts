import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {PopupComponent} from "./popup/popup.component";
import {EventpageComponent} from "./eventpage/eventpage.component";
import {OptionsComponent} from "./options/options.component";

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'event-page', component: EventpageComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'options', component: OptionsComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
