import React, { useState , useEffect } from 'react'
import "./Datatable.scss"
import {userColumns , userRows} from "../../Data/datatablesource" ; 
import {Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {auth , db} from '../../Data/Firebase'
import { collection, getDocs , deleteDoc , doc , onSnapshot} from "firebase/firestore";




const Datatable = () => {

  const [data, setData] = useState([]) ; 

useEffect(() => {
//   const fetchData = async () => {
//     let list =[] ;
// try {
//     const querySnapshot = await getDocs(collection(db, "clients"));
//     querySnapshot.forEach((doc) => {
//       list.push({id: doc.id, ...doc.data()}) ; 
//     });
//     console.log(list);
//     setData(list) ;
//   } catch(err) {
//     console.log(err)
//   }

//   };
//     fetchData() ;

const unsub = onSnapshot(collection(db,"clients") , (Snapshot) => {
let list = [] ; 
Snapshot.docs.forEach(doc => {
list.push({id:doc.id, ...doc.data() }) ; 


}) ; 
setData(list) ; 
}, (error)=> {
  console.log(error);
});
return() => unsub() ; 
}, []) ; 



  const handleDelete = (id) => {
    try{
deleteDoc(doc(db, "clients", id));

      setData(data.filter((item)=> item.id!==id)) ;
    }
    catch(err) {
      console.log(err)
    }
; 

  };
  

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
<div className='deleteButton' >
  <button onClick={handleDelete}>
  Delete
  </button>
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
        rows={data}
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