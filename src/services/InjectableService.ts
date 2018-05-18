import { Injectable } from '@angular/core'
import { ApiService } from './api.service'

@Injectable()
export class InjectableService{
    constructor (private apiService: ApiService){}

    global(){
        return {"dome":"111"}
    }

    // stringLength(str){
        
    // }
    
}