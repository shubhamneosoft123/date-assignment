import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustemDateComponent } from './custem-date/custem-date.component';
import { MultiLanguageComponent } from './multi-language/multi-language.component';

const routes: Routes = [
  {path:"",component:CustemDateComponent},
  {path:"multi-language",component:MultiLanguageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
