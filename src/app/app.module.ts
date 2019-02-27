import { CrudService } from './crud-app/service/crud.service';
import { WorkItemListComponent } from './crud-app/workitem-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ExcelService } from './excel.service';


@NgModule({
  declarations: [
    AppComponent,
   
    WorkItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    CrudService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
