import React from 'react'

export default function Alert(props) {

    function capitalize(word){
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
      }

  return (
    <div style={{height:'20px'}}>
     {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}
        </div>}
    </div>
  )
}
