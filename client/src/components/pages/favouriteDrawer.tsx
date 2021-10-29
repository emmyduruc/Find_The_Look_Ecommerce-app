import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Badge } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { RootState } from '../redux/types'
import styled from 'styled-components'
import { mobile } from './Responsive'
import { decrementCount, removeFavourite } from '../redux/actions'
import { MdClose } from 'react-icons/md'

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${mobile({ fontSize: '10px', marginLeft: '10px' })}
`
const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;

  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 10px 0 0 10px;
  background: #000;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
function FavouriteDrawer({ open, setOpen, productId }: any) {
  const dispatch = useDispatch()
  // const [open, setOpen] = React.useState(false);
  const favouriteCounter = useSelector((state: RootState) => {
    return state.cartReducer.favourites
  })
  const remove = () => {
    dispatch(removeFavourite(productId))
    dispatch(decrementCount())
  }
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <MenuItem>
        <p>wishlist</p>
        <Badge
          badgeContent={favouriteCounter.length}
          style={{ color: 'white' }}
        >
          <FavoriteBorderIcon
            onClick={handleClickOpen}
            style={{ color: 'red' }}
          />
        </Badge>
      </MenuItem>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
       
        {/* <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions> */}
        <Button autoFocus onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
        {/* </DialogActions> */}
      </Dialog>
    </div>
  )
}
export default FavouriteDrawer

// import React from 'react'
// import styled from 'styled-components'
// import { mobile } from './Responsive'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../redux/types'
// import { MdClose } from 'react-icons/md';
// // const Container = styled.div`
// // height: 60vh;
// // `

// // const Wrapper = styled.div`
// //   padding: 20px;
// //   ${mobile({ padding: '10px' })}
// // `
// // const Title = styled.h2`
// //   font-weight: 300;
// //   text-align: center;
// // `
// // const ProductDetail = styled.div`
// //   flex: 2;
// //   display: flex;
// // `
// // const Image = styled.img`
// //   width: 200px;
// // `
// // const ProductName = styled.span``

// // const ProductId = styled.span``

// // const Details = styled.div`
// //   padding: 20px;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: space-around;
// // `
// // const Background = styled.div`
// //   width: 100%;
// //   height: 100%;
// //   background: rgba(0, 0, 0, 0.8);
// //   position: fixed;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// const ModalWrapper = styled.div`
//   width: 600px;
//   height: 400px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: flex;

//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;

// const ModalImg = styled.img`
//   width: 300px;
//   height: 400px;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;
// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

// type FavouriteDrawerType = {
//   showFav: boolean
//   setShowFav: any
// }
// const FavouriteDrawer = ({ showFav, setShowFav }: FavouriteDrawerType) => {
//   const CartCounter = useSelector((state: RootState) => {
//     return state.cartReducer.favourites
//   })
//   console.log('cartCounter', CartCounter)

//   return (
//     <>
//        {showFav ? (
//             <ModalWrapper >
//                <ModalImg  />
//               <ModalContent>
//               <h1>Your Wish</h1>
//                 <h1>Are you ready?</h1>
//                 <p>Get exclusive access to our next launch.</p>
//                 <button>To Cart</button>
//               </ModalContent>
//               <CloseModalButton
//                 aria-label='Close drawer'
//                 onClick={() => setShowFav((prev:any) => !prev)}
//               />
//             </ModalWrapper>
//       ) : null}
//     </>
//   )
// }

// export default FavouriteDrawer
