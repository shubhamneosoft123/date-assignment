import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custem-date',
  templateUrl: './custem-date.component.html',
  styleUrls: ['./custem-date.component.css'],
})
export class CustemDateComponent implements OnInit {
  myForm: any;
  finalResultDate: any;
  
  constructor() {}
  
  //Year
  currentyear: any;
  startYear: any = 1950;
  range: any = [];
  selectedYear: any;

  //Months
  monthsDate: any;
  monthAllsDate: any = [];
  resultDate: Date | undefined;
  selectedMonth: any;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //Dates
  ngOnInit(): void {
    this.myForm = new FormGroup({
      date: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
    });

    // year
    this.currentyear = new Date().getFullYear();
    for (var i = this.startYear; i <= this.currentyear; i++) {
      this.range.push(i);
    }
   
    
  }

  submitMonths(): void {
    this.finalResultDate="";
    this.myForm.controls.date.reset();
    this.monthAllsDate = [];
    this.selectedYear = this.myForm.controls.year.value;
    this.selectedMonth = this.myForm.controls.month.value;

    this.monthsDate = new Date(
      parseInt(this.selectedYear),  
      (parseInt(this.selectedMonth)+1),
      0
    ).getDate();
    for (var i = 1; i <= this.monthsDate; i++) {
      this.monthAllsDate.push(i);
    }
    console.log(this.selectedYear, this.selectedMonth);
  }

  finalDates() {
    this.resultDate=new Date();
    this.resultDate.setFullYear(this.myForm.value.year);
    this.resultDate.setMonth(this.myForm.value.month);
    this.resultDate.setDate(this.myForm.value.date);

      this.finalResultDate=this.resultDate;
 
     console.log(this.finalResultDate);
     console.log(this.myForm.value.date);
  }
  //
  resetForm(){
    this.myForm.controls.month.reset();
    this.myForm.controls.date.reset();
    // this.finalResultDate=null;
    this.finalResultDate="";
  }
  //
}

