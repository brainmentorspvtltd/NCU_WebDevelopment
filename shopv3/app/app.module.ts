import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './shop/category/category.component';
import { SubcategoryComponent } from './shop/subcategory/subcategory.component';
import { ItemsComponent } from './shop/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CategoryComponent,
    SubcategoryComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
