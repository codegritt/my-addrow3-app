import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { Child } from '../shared/child.true';
@Component({
  selector: 'app-master-child',
  templateUrl: './master-child.component.html',
  styleUrls: ['./master-child.component.css']
})
export class MasterChildComponent implements OnInit {
userForm: FormGroup
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
    console.log(this.dynamicArray);  
    return true;  
}  
  
deleteRow(index) {  
    if(this.dynamicArray.length ==1) {   
        return false;  
    } else {  
        this.dynamicArray.splice(index, 1);  
        return true;  
    }  
}  

  
}
