import React, { Component } from 'react'
import loading from './loader.gif'

// export default class Loading extends Component {
//   render() {
    
//   }
// }

export const Loading = ()=> {
  return (
    <div className='text-center my-3'><img src={loading} alt='loading' /></div>
  )
}

// export default Loading