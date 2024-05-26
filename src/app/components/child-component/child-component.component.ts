import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() public nameFromParent:any;
  @Output() public childElement =new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public eventChild(){
    this.childElement.emit("Message from  child to parent")

  }




}
