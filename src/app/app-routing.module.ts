import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirdemoComponent } from './dirdemo/dirdemo.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:"welcome",component:WelcomeComponent},{path:"databind",component:DatabindingComponent},
 {path:"eventbind",component:EventbindingComponent},
 {path:"twowaybind",component:TwowaybindingComponent},
 {path:"dirdemo",component:DirdemoComponent},
 {path:"crud",component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
