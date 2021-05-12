import { SearchBarComponent } from './../search-bar/search-bar.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Employee } from '../employees/models/employee';
import { EmployeeService } from '../employees/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni' , 'id'];

  @Input() employee: Employee;
  // tslint:disable-next-line: no-input-rename
  @Input('master') masterName: string;

  constructor(private employeeService: EmployeeService) {

  }
  public selectEvent(employee){
    console.log(employee);
  }

  // Gets all employees from service
  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void{
    this.data = this.employeeService.getEmployees();
  }

}
