import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {
  ToDode: any[] = [];

  constructor(private to: ToDoServiceService) { }

  ngOnInit(): void {
    this.ToDode = this.to.getToDo()
  }
}
