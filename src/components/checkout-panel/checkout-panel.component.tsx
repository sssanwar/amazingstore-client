import { Grid } from '@material-ui/core'
import React, { Fragment } from 'react'
import { TotalSum } from '../../lib/types/common.type'
import './checkout-panel.component.css'

export default function CheckoutPanel(props: { totalSum: TotalSum }) {
  const { totalSum } = props
  return (
    <Grid container justify="space-between" alignItems="flex-start">
      <Grid item>
        {totalSum.details.length > 0 && (
          <Fragment>
            <p>Promotions Applied: </p>
            <ul>
              {totalSum.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </Grid>

      <Grid item>
        <p>
          <label className="amount-label">Sub Total: </label>
          <span className="amount-value">${totalSum.subTotal}</span>
        </p>
        <p>
          <label className="amount-label">Saved: </label>
          <span className="amount-value">${totalSum.saved}</span>
        </p>
        <p>
          <label className="amount-label">Total: </label>
          <span className="amount-value">
            <strong>${totalSum.total}</strong>
          </span>
        </p>
      </Grid>
    </Grid>
  )
}
