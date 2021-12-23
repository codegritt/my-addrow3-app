import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';  

import { Child } from '../shared/child.true';
@Component({
  selector: 'app-master-child',
  templateUrl: './master-child.component.html',
  styleUrls: ['./master-child.component.css']
})
export class MasterChildComponent implements OnInit {

  constructor() { }
  dynamicArray: Array<Child> = [];  
  newDynamic: any = {};  
  ngOnInit(): void {  
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);
  }

  addRow(index) {    
    this.newDynamic = {title1: "", title2: "",title3:""};  
    this.dynamicArray.push(this.newDynamic);  
  //  this.toastr.success('New row added successfully', 'New Row');  
    console.log(this.dynamicArray);  
    return true;  
}  
  
deleteRow(index) {  
    if(this.dynamicArray.length ==1) {  
    //  this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
        return false;  
    } else {  
        this.dynamicArray.splice(index, 1);  
     //   this.toastr.warning('Row deleted successfully', 'Delete row');  
        return true;  
    }  
}  

  
}
