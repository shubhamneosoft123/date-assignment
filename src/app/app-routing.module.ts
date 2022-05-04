import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiLanguageComponent } from './multi-language/multi-language.component';
import { CustemDateComponent } from './custem-date/custem-date.component';

const routes: Routes = [
  {path:"",component:MultiLanguageComponent},
  {path:"custem-date",component:CustemDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
