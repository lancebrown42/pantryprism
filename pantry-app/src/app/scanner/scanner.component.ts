import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  valid:boolean = true;
  invalid:boolean = true;
  listy:string[] = ["one", "two", "three"]
  constructor() { }

  ngOnInit(): void {

  }

}
