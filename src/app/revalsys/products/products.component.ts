import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
declare var $: any;



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchTerm: any;
  products: any[] = [];
  productForm: FormGroup;
  isLoading = false;
  productId: any;
  todayDate: Date = new Date();
  config: any;


  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Product.xlsx');
  }


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) {

    this.productForm = this.fb.group({
      availableDate: ['', Validators.required],
      availableTime: ['', Validators.required],
      categoryId: ['', Validators.required],
      categoryName: ['', Validators.required],
      deliveryOption: ['', Validators.required],
      deliveryTime: ['', Validators.required],
      description: ['', Validators.required],
      endingDate: ['', Validators.required],
      endingTime: ['', Validators.required],
      imagePath: ['', Validators.required],
      isActive: ['', Validators.required],
      isEditable: ['', Validators.required],
      name: [''],
      price: [''],
      quantity: [''],
      rating: [''],
      ratingCount: [''],
      special: [''],
      stock: [''],
      userAddress: [''],
      userName: [''],
      status: [''],
      isDeletable: ['']

    })
    // this.config = {
    //   itemsPerPage: 12,
    //   currentPage: 1,
    //   totalItems: this.products.length
    // };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.userService.getAllProducts()
    console.log("All Products : ", this.products)
  }






}
