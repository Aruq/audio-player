import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AudioTableComponent } from "./audio-table/audio-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, AudioTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}