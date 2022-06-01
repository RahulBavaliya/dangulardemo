import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Student } from '../student';
import { UserserviceService } from '../userservice.service';
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  Id: string;
  Name: string;
  Actors: string;

  public dataSource = new MatTableDataSource<Student>();
  constructor(private user:UserserviceService,public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }
  sendData(result:Student) {
  
    console.log("This is student data "+result);
    
    if(result.Id != null || result.Id != undefined){
      this.user.sendData(result)
      .subscribe((res)=>{
        console.log(res);
          this.dataSource.data = res;
      })
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { Id: this.Id,Name: this.Name,Actors: this.Actors },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sendData(result);
    });
  }
}
