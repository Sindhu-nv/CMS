import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
  private fileList : any = [];
  private invalidFiles : any = [];
  constructor() { }

  ngOnInit() {
  }
  
  onFilesChange(fileList : Array<File>){
    this.fileList = fileList;
  }

  onFileInvalids(fileList : Array<File>){
    this.invalidFiles = fileList;
  }
}
