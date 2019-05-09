import { Component, OnInit } from '@angular/core';

 import { IProduct } from './product';
// import { ProductService } from './product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
// export class ProductListComponent implements OnInit {
  export class ProductListComponent {
    sampleText = 'testing nested component';
    pageTitle = 'Product List';
    testingNgIfProp = false;
    products: IProduct[] = [{
    description:'this is a thing',
    imageUrl: 'http://assets.blabbermouth.net/media/davidhasselhofftour2019poster_638.jpg',
    price: 2,
    productCode: '123456789',
    productId: 222,
    productName: 'Super Thing',
    releaseDate: '1/1/2020',
    starRating: 5
    }];
    imageWidth = 50;
    imageMargin = 2;
    showImage = true;
    testingNgIf(): void {
      this.testingNgIfProp = !this.testingNgIfProp;
    }



  // errorMessage = '';

  // _listFilter = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }

  // filteredProducts: IProduct[] = [];
  // products: IProduct[] = [];

  // constructor(private productService: ProductService) {

  // }

  // onRatingClicked(message: string): void {
  //   this.pageTitle = 'Product List: ' + message;
  // }

  // performFilter(filterBy: string): IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) =>
  //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe(
  //     products => {
  //       this.products = products;
  //       this.filteredProducts = this.products;
  //     },
  //     error => this.errorMessage = <any>error
  //   );
  // }
}
