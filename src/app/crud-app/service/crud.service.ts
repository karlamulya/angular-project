import { WorkItemDTO } from './../../model';
import { Injectable } from '@angular/core';


@Injectable()
export class CrudService{
 workItems:WorkItemDTO[];
 nextNumber:number;

 constructor(){
  
 }

 getAllWorkItems() {
   
      let workItems = JSON.parse(localStorage.getItem('workItems'));
      if(workItems==null){
        workItems=[]
      }
     return workItems;
  }

  addWorkItems(workItem: WorkItemDTO) {
    if(localStorage.getItem('workItems')==null){
      let workItemsList:WorkItemDTO[]=[]
      workItemsList.push(workItem)
      localStorage.setItem('workItems', JSON.stringify(workItemsList));

    }else{
      let workItemsList:WorkItemDTO[] = JSON.parse(localStorage.getItem('workItems'));
      workItemsList.push(workItem);
      localStorage.setItem('workItems', JSON.stringify(workItemsList));
    }
   
    
  }

  deleteworkItems(index:number) {
    let workItems:WorkItemDTO[]=JSON.parse(localStorage.getItem('workItems'));
    workItems.splice(index,1);
    localStorage.setItem('workItems',JSON.stringify(workItems))
  }

}

