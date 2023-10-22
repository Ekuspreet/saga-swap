import React from 'react'

export default function Heading(props) {
const a=props.fword[0];
    
  return (
<>
<h1>
{ a } , { props.sword }
</h1>
</>
    )
}
