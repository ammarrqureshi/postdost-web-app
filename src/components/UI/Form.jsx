import React from 'react'
import Button from './Button'
const Form = ( props ) => {
    const sayHello = () => {
        alert("Hello Postdost");
    }
  return (
    <div>
        <form action="">
            <input type="email" placeholder="Email here"/>
            <Button onClick= {sayHello}> Submit</Button>
        </form>
    </div>
  )
}

export default Form