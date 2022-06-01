import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { UserserviceService } from './userservice.service';

import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "./student";
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'crudangular';

  // constructor(private user:UserserviceService){
  //   this.user.getMovieList().subscribe(data=>{
  //     console.log(data);
  //   })
  // }

  student: Student[] = [];
  
  public displayedColumns = ['id', 'name', 'actors' ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Student>();


  constructor(private user:UserserviceService,private _liveAnnouncer: LiveAnnouncer){
    // this.user.getMovieList().subscribe(data=>{
    // console.log(data);

    // }
    // )
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getStudentsInformation();
    this.dataSource.paginator = this.paginator;
  }

  getStudentsInformation(){
    this.user.getStudentsInformation()
      .subscribe((res)=>{
        console.log(res);
        this.dataSource.data = res;
      })
  }
  

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
