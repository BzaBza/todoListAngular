import { FormComponent } from './form/form.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { ListsComponent } from './containers/lists/lists.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
     ListsComponent, TasksComponent, FormComponent, TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
