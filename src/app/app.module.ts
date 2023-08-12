import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componets/header/header.component';
import { PageInfComponent } from './componets/page-inf/page-inf.component';
import { PageSkillsComponent } from './componets/page-skills/page-skills.component';
import { PageContatosComponent } from './componets/page-contatos/page-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageInfComponent,
    PageSkillsComponent,
    PageContatosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
