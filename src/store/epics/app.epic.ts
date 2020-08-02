import { Observable, from } from 'rxjs'
import { PayloadAction, Action } from '@reduxjs/toolkit'
import { retrieveProducts, retrieveProductsDone, calculateTotal, calculateTotalDone } from '../slices/app.slice'
import { ActionsObservable, ofType } from 'redux-observable'
import * as api from '../../apis'
import { flatMap, map } from 'rxjs/operators'
import { CartItem } from '../../lib/types/common.type'

export const retrieveProductsEpic = (action$: ActionsObservable<Action>): Observable<any> =>
  action$.pipe(
    ofType(retrieveProducts.type),
    flatMap(() => from(api.getProducts()).pipe(map(res => retrieveProductsDone(res.data))))
  )

export const calculateTotalEpic = (action$: ActionsObservable<PayloadAction<CartItem[]>>): Observable<any> =>
  action$.pipe(
    ofType(calculateTotal.type),
    flatMap(action => from(api.calculateTotal(action.payload)).pipe(map(res => calculateTotalDone(res.data))))
  )
