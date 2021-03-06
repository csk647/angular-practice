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
import { AuthGuardService } from './auth-guard.service';
import { StructorDirectiveTestComponent } from './structor-directive-test/structor-directive-test.component';
import { SharedModule } from './shared/shared.module';
import { ConvertPipe } from './pipes/convert.pipe';
import { ObservableDataComponent } from './observable-data/observable-data.component';
import { AsyncDataPipe } from './pipes/asyncData.pipe';

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
    StructorDirectiveTestComponent,
    AsyncDataPipe,
    ConvertPipe,
    ObservableDataComponent
  ],
  imports: [
    BrowserModule, // browsermodule은 최상위 한 곳에만 import 하면 된다. 나머지엔 common module import
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, // formControl 쓸 때 appmodule에서 import 해주고 써야 함,
    SharedModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
