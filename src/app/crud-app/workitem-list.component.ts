import { ExcelService } from './../excel.service';
import { CrudService } from './service/crud.service';
import { WorkItemDTO } from './../model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $;
@Component({
    selector: 'work-item-list',
    templateUrl: './workiItem-list.component.html',
    styleUrls: ['./crud.component.scss']
})
export class WorkItemListComponent implements OnInit {
    displayList: boolean = true;
    displayAdd: boolean = false
    workItemDTO: WorkItemDTO;
    workItems: WorkItemDTO[];
    onAddName:boolean=false;
    onEditName:boolean=false;
    constructor(private router: Router, private excelService:ExcelService, private crudService: CrudService) { }
    ngOnInit() {
        this.workItemDTO = new WorkItemDTO();
        this.workItems = [];
        this.workItems = this.crudService.getAllWorkItems();
    }
   
    onAdd() {
        this.workItemDTO = new WorkItemDTO();
        this.displayAdd = true;
        this.displayList = false;
        this.onAddName=true;
        this.onEditName=false;
    }
    onCancel() {
        this.displayAdd = false;
        this.displayList = true;
    }
    onSave() {
        console.log("clicked");
        this.workItems.push(this.workItemDTO);
        this.crudService.addWorkItems(this.workItemDTO);
        console.log("workItem", this.workItemDTO);
        this.displayList=true;
        this.displayAdd=false;
    }

    onEdit(workItem: WorkItemDTO) {
        this.workItemDTO = workItem;
        this.displayAdd = true;
        this.displayList=false;
        this.onAddName=false;
        this.onEditName=true;
    }

    onDelete(index:number) {
        var resuly= confirm("are you sure?")
        if(resuly){
            this.crudService.deleteworkItems(index);
            this.workItems = this.crudService.getAllWorkItems();
        }
    

    }
    exportAsXLSX():void {
        this.excelService.exportAsExcelFile(this.workItems, 'sample');
      }
      ngOnDestroy(){

        this.workItems = null;
      
      }

}