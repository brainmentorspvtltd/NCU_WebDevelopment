import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  fileName:string;
  fileSize:string;
  fileType:string;
  message:string;
  fileObject:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  getSelectedFile(event):void{
  this.fileObject = event.target.files[0];
    console.log('File Name is ',this.fileObject);
    this.fileName = this.fileObject.name;
  this.fileSize = this.fileObject.size;
  this.fileType = this.fileObject.type;
  // if(!(this.fileType=='' || this.fileType=='' || this.fileType=='')){
  //   this.message = 'Invalid File Type';
  // }
  }

  download():void{
    window.location.href=environment.downloadURL;
  }

  uploadFile():void{
    const formData = new FormData();
    formData.append('productfile',this.fileObject,this.fileName)

    this.http.post(environment.uploadURL,formData).subscribe(data=>{
      this.message = data['message'];
    },(err)=>{
        this.message = err['message'];
    })
  }

}
