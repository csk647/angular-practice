import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { MyTestComponent } from './my-test/my-test.component';
import { MyAssignComponent } from './my-assign/my-assign.component';
import { EmitterTestComponent } from './emitter-test/emitter-test.component';
import { SeveralFormsComponent } from './several-forms/several-forms.component';
import { ServiceTestComponent } from './service-test/service-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent,
    ItemListComponent,
    NameEditorComponent,
    MyTestComponent,
    MyAssignComponent,
    EmitterTestComponent,
    SeveralFormsComponent,
    ServiceTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule // formControl 쓸 때 appmodule에서 import 해주고 써야 함
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
