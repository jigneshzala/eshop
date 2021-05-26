import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
// import { OrdersModule } from '@eshop-team/orders';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
@NgModule({
  imports: [CommonModule, RouterModule, ButtonModule],
  declarations: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
  ],
  exports: [
    ProductsSearchComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    CategoriesBannerComponent,
  ],
})
export class ProductsModule {}
