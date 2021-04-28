import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ShopNewTiresComponent } from "./shop-new-tires/shop-new-tires.component";
import { ShopNewTiresService } from "./shop-new-tires.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ShopNewTiresComponent],
  bootstrap: [AppComponent],
  providers: [ShopNewTiresService]
})
export class AppModule {}
