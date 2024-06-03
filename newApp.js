
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect,useState} from 'react';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  
];



function App() {
  const [users, setUsers] = useState(1);
  const [totalUsers, setTotalUsers] = useState();

  useEffect=()=>{

  const fetchData = async () => {   
    const response = await axios.get('https://randomuser.me/api/?results=100');
    console.log(response.data.results); 
    setUsers(response.data.results,[]);
    setTotalUsers(response.data.results.length,[]);
    console.log(users,totalUsers)
    };

    fetchData();
  }

  return (
    <div style={{ marginLeft:"400px",height: "100vh",width: '50%'}}>
      
      <DataGrid
      initialState={{
        pagination: {
          paginationModel: { page: 5, pageSize: 5,  },
        },
      }}
      pageSizeOptions={[5, 10, 15]}
        rows={users}
        rowCount={totalUsers}
        columns={columns}
        
       
      />
    </div>
  );

}
export default App;
