import React from 'react'
import "./Datatable.scss"
import {userColumns , userRows} from "../../Data/datatablesource" ; 
import {Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';




const Datatable = () => {


const actionColumn = [
{
field: "action" , headerName: "Action" , width: 200 , renderCell: ()=> {
return (
<div className='cellAction'>
<Link to="/users/test" style={{textDecoration: "none"}}>
<div className='viewButton'>
  View


</div>
</Link>
<div className='deleteButton'>
  Delete

</div>

</div>

)



}}

]



  return (
    <div className='datatable'>
      <div className="test">
<Link to="/users/new" style={{textDecoration: "none"}}>
 <button className='lead'>Ajouter un element</button>
      </Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection

        className='grid'
      />


    </div>
  )
}

export default Datatable