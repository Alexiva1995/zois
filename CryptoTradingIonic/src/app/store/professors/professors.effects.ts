import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfessorService } from '../../services/professor.service';
import * as ProfessorsActions from './professors.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class ProfessorsEffects {
  loadProfessors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfessorsActions.loadProfessors),
      mergeMap(() =>
        this.professorService.getProfessors().pipe(
          map((professors) =>
            ProfessorsActions.loadProfessorsSuccess({ professors })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private professorService: ProfessorService
  ) {}
}
