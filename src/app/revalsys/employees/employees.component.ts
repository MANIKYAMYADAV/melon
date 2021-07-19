import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
declare var $: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeForm: FormGroup;
  todayDate: Date = new Date();
  config: any;
  searchTerm: any;
  employees: any[] = [];
  formId: any;


  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Product.xlsx');
  }

  constructor(
    private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private userService: UserService) {
    this.employeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      employeeId: ['', Validators.required],
      // emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // password: ['', Validators.required],
    })
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.employees.length
    };

    this.activeRoute.queryParams.subscribe(params => {
      this.formId = params.id;
      // this.getDataForEditForm( this.formId)
    });

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    this.getAllEmployees();

  }

  getAllEmployees() {
    this.userService.getAllEmployees().subscribe((response) => {
      this.employees = response;
      console.log("All Employees : ", response);
    })
  }

  getFormId(id) {
    this.formId = '';
    this.formId = id;
  }


  deleteEmployee() {
    this.userService.deleteEmployee(this.formId).subscribe(Response => {
      console.log(Response);
      this.getAllEmployees();
    })
  }

  employeeData(data) {
    console.log(data);
    if (this.formId == '') {
      this.userService.postEmployee(data).subscribe((response) => {
        console.log("Created Employee Data :", response);
        this.employeeForm.reset();
      })
    }
    else {
      this.userService.updateEmployee(this.formId).subscribe((response) => {
        console.log("Updated Employee Data :", response);
        this.employeeForm.reset();
      })
    }

  }

  getDataForEditForm(id) {
    this.userService.getEmployeeDetails(id).subscribe(Response => {
      if (Response == 'success') { }
      let data = {
        "employeeId": Response.data.employeeId,
        "employeeName": Response.data.name,
      }
      this.employeeForm.patchValue(data);
    })
  }

}
