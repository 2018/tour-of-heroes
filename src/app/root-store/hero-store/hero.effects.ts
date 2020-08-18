import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {undo} from 'ngrx-undo';
import {HeroesService} from '../../services/heroes.service';
import * as fromHeroActions from './hero.actions';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class HeroEffects {

    loadHeroes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromHeroActions.loadHeroes),
            switchMap(() =>
                this.heroesService.getAll().pipe(
                    map((response: any) => {
                        return fromHeroActions.loadHeroesSuccess({
                            data: response
                        });
                    }),
                    catchError(error => {
                        return of(
                            fromHeroActions.loadHeroesFail({
                                error
                            })
                        );
                    })
                )
            )
        )
    );

    loadHero$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromHeroActions.loadHero),
            switchMap(({ id }) =>
                this.heroesService.get(id).pipe(
                    map((response: any) => {
                        return fromHeroActions.loadHeroSuccess({
                            entity: response
                        });
                    }),
                    catchError(error => {
                        return of(
                            fromHeroActions.loadHeroFail({
                                error
                            })
                        );
                    })
                )
            )
        )
    );

    updateHero$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromHeroActions.updateHero),
            switchMap(action =>
                this.heroesService.update(action.entity.id, action.entity).pipe(
                    map((response: any) => {
                        return fromHeroActions.updateHeroSuccess({
                            entity: response
                        });
                    }),
                    catchError(error => {
                        return of(
                            fromHeroActions.updateHeroFail({
                                error
                            }),
                            undo(action)
                        );
                    })
                )
            )
        )
    );

    createHero$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromHeroActions.createHero),
            switchMap(action =>
                this.heroesService.create(action.entity).pipe(
                    map((response: any) => {
                        return fromHeroActions.createHeroSuccess({
                            entity: response
                        });
                    }),
                    catchError(error => {
                        return of(
                            fromHeroActions.createHeroFail({
                                error
                            }),
                            undo(action)
                        );
                    })
                )
            )
        )
    );

    deleteHero$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromHeroActions.deleteHero),
            switchMap(action =>
                this.heroesService.delete(action.id).pipe(
                    map((response: any) => {
                        return fromHeroActions.deleteHeroSuccess({
                            id: response.id
                        });
                    }),
                    catchError((error: Error) => {
                        return of(
                            fromHeroActions.deleteHeroFail({
                                error
                            }),
                            undo(action)
                        );
                    })
                )
            )
        )
    );

    navigateTo$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromHeroActions.navigateTo),
                tap((action) => this.router.navigate([action.prop]))
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService,
        private router: Router
    ) {}
}
