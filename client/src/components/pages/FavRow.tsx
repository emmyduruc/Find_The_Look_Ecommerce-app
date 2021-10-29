import React from 'react'
import { RiChatDeleteFill } from 'react-icons/ri'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { decrementCount, removeFavourite } from '../redux/actions'
const useStyles = makeStyles({
  rows: {
    width: '200px',
  },
  icon: {
    marginLeft: '10rem',
    display: 'flex',
    justifyContent: '',
  },
  celltext: {
    textDecoration: 'none',
    color: '#dad423',
    fontWeight: 'bold',
  },
})
function FavRow({ productId }: any) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(removeFavourite(productId))
    dispatch(decrementCount())
  }
  return (
    <div>
      <TableRow>
        <TableCell className={classes.rows}>
          <img src={productId.image} width="100px" alt="product" />
        </TableCell>
        <TableCell className={classes.rows}></TableCell>
        <TableCell align="left" className={classes.rows}>
          <RiChatDeleteFill className={classes.icon} onClick={remove} />
        </TableCell>
      </TableRow>
    </div>
  )
}

export default FavRow
