import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStoreService } from "src/app/services/local-store.service";
import { Profile } from "src/app/models/profile.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.scss']
})
export class ListProfilesComponent implements OnInit {

  userList: Profile[] = [];

  displayedColumns: string[] = ['name', 'address', 'dob', 'role', 'phone', 'gender'];
  dataSource = new MatTableDataSource();

  constructor(
    private ls: LocalStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userList = this.ls.getItem("userList");
    this.dataSource.data = this.userList;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser() {
    this.router.navigateByUrl("add");
  }
}
