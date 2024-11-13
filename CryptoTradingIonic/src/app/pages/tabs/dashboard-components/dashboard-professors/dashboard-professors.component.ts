import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/services/professor.service';
import { loadProfessors } from 'src/app/store/professors/professors.actions';
import { selectProfessors } from 'src/app/store/professors/professors.selectors';

@Component({
  selector: 'app-dashboard-professors',
  templateUrl: './dashboard-professors.component.html',
})
export class DashboardProfessorsComponent implements OnInit {
  professors$: Observable<Professor[]>;

  constructor(private store: Store) {
    this.professors$ = this.store.select(selectProfessors);
  }

  ngOnInit() {
    this.store.dispatch(loadProfessors());
  }
}
