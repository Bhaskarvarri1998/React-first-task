
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect,UseState} from 'react';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];



function App() {
  const [Users, setUsers] = UseState([]);
  const [TotalUsers, setTotalUsers] = UseState();

useEffect(async () => {
  
  // const fetchData = async () => {

      
      const response = await axios.get('https://randomuser.me/api/?results=100');
      console.log(response.data.results); 
      setUsers(response.data.results,[]);
      setTotalUsers(response.data.results.length,[]);
      console.log(Users,TotalUsers)
  // };
  // fetchData();

  }, []);
  return (
    <div style={{ marginLeft:"400px",height: "100vh",width: '50%'}}>
      
      <DataGrid
      initialState={{
        pagination: {
          paginationModel: { page: 5, pageSize: 5,  },
        },
      }}
      pageSizeOptions={[5, 10, 15,]}
        rows={Users}
        rowCount={TotalUsers}
        columns={columns}
        
       
      />
    </div>
  );
}

export default App;
