import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';


Injectable({
    providedIn:'root'
});
export class UploadService{
    constructor(private api : ApiService){}
    uploadCourseImage(formdata : FormData){   
    }
    
}