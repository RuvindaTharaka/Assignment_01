import React from 'react'

export const Usertable = () => {
  return (
   <div style={{ display:'flex',justifyContent:'center', marginTop:'40px'}}>
        <table>
            <thead>
                <tr style={{ border:'1px solid red', background:'green', height:'30px', color: 'white' }}>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
           <tbody>
                <tr style={{ height:'25px'}}>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr style={{ height:'25px'}}>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr style={{ height:'25px'}}>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr style={{ height:'25px'}}>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
           </tbody>
           
        </table>
   </div>
  )
}
