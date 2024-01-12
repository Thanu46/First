import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunComponent } from './sun.component';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormparentComponent } from './formparent/formparent.component';
import { ListchildComponent } from './listchild/listchild.component';
import { PaperService } from './paper.service';
import { ParagraphComponent } from './paragraph/paragraph.component';
  




@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    StarComponent,
    TemplateComponent,
    ReactiveComponent,
    FormparentComponent,
    ListchildComponent,
    ParagraphComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
    PaperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
