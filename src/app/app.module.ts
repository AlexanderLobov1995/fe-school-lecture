import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { DrawingComponent } from './drawing/drawing.component';
import { DrawingToolComponent } from './drawing/drawing-tool/drawing-tool.component';
import { DrawingAreaComponent } from './drawing/drawing-area/drawing-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ParentComponent,
    ChildComponent,
    DrawingComponent,
    DrawingToolComponent,
    DrawingAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
