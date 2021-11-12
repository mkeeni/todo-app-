import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  ToDoli:any[] = [];

  constructor(private to:ToDoServiceService) { }

  ngOnInit(): void {
    this.ToDoli = this.to.getToDo()
  }

}
