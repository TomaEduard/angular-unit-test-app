import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sum = 0;
  result: any;

  constructor(
    // private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }

  // saveData() {
  //   let info = {
  //     sumVal: this.calculate(5, 5),
  //     name: "test_name"
  //   }

  //   this.SaveDataInConsol(info);
  //   this.studentService.SaveDetails(info).subscribe(response => {
  //     this.result = response;
  //   })

  // }

  SaveDataInConsol(info: { sumVal: number; name: string; }) {
    console.log('SaveDataInConsol', info);
  }

}
