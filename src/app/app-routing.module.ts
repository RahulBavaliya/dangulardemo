import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
 
const routes: Routes = [
   
  {
    path: 'hello',
    component: AppComponent,
    
  }

];
@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }
