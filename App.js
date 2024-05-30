import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



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

const rows = [
  { id: 1, lastName: 'rao', firstName: 'Bhaskar', age: 25 },
  { id: 2, lastName: 'rajesh', firstName: 'Mohan', age: 24 },
  { id: 3, lastName: 'prakash', firstName: 'Bhanu', age: 24 },
  { id: 4, lastName: 'Sai', firstName: 'Lok', age: 23 },
  { id: 5, lastName: 'Narayan', firstName: 'Badri', age: null },
  { id: 6, lastName: 'Vinay', firstName: null, age: 25 },
  { id: 7, lastName: 'gopal', firstName: 'Venu', age: 25 },
  { id: 8, lastName: 'Jessy', firstName: 'Vikram', age: 22 },
  { id: 9, lastName: 'Viashnavi', firstName: 'vendra', age: 24 },
  { id: 10, lastName: 'kavya', firstName: 'pulaparthi', age: 22 },
  { id: 11, lastName: 'navya', firstName: 'golla', age: 23 },
  { id: 12, lastName: 'sravya', firstName: 'sri', age: 23 },
  { id: 13, lastName: 'likhitha', firstName: 'puvvala', age: 22 },
  { id: 14, lastName: 'anu', firstName: 'radha', age: 24 },
  { id: 15, lastName: 'kranthi', firstName: 'kuna', age: 22 },
  { id: 16, lastName: 'srivalli', firstName: 'vendra', age: 23},
  { id: 17, lastName: 'radha', firstName: 'sri', age: 44 },
  { id: 18, lastName: 'balu', firstName: 'yarramsetti', age: 36 },
  { id: 19, lastName: 'kavya', firstName: 'sri', age: 24 },
  { id: 20, lastName: 'kavya', firstName: 'sri', age: 24 },
  { id: 21, lastName: 'uma', firstName: 'dasari', age: 24},
  { id: 22, lastName: 'sreeja', firstName: 'nalli', age: 22 },
  { id: 23, lastName: 'bhavya', firstName: 'cheday', age: 23 },
  { id: 24, lastName: 'lalitha', firstName: 'Arya', age: 16 },
  { id: 25, lastName: 'anusha', firstName: 'Daenerys', age: 23 },
  { id: 26, lastName: 'aruna', firstName: 'sri', age: 23 },
  { id: 27, lastName: 'kavyasri', firstName: null, age: 28 },
  { id: 28, lastName: 'hema', firstName: 'latha', age: 24 },
  { id: 29, lastName: 'Ramya', firstName: 'sri', age: 23 },
  { id: 30, lastName: 'swathi', firstName: 'sri', age: 24 },
  { id: 31, lastName: 'rao', firstName: 'Bhaskar', age: 25 },
  { id: 32, lastName: 'rajesh', firstName: 'Mohan', age: 24 },
  { id: 33, lastName: 'prakash', firstName: 'Bhanu', age: 24 },
  { id: 34, lastName: 'Sai', firstName: 'Lok', age: 23 },
  { id: 35, lastName: 'Narayan', firstName: 'Badri', age: null },
  { id: 36, lastName: 'Vinay', firstName: null, age: 25 },
  { id: 37, lastName: 'gopal', firstName: 'Venu', age: 25 },
  { id: 38, lastName: 'Jessy', firstName: 'Vikram', age: 22 },
  { id: 39, lastName: 'Viashnavi', firstName: 'vendra', age: 24 },
  { id: 40, lastName: 'kavya', firstName: 'pulaparthi', age: 22 },
  { id: 41, lastName: 'navya', firstName: 'golla', age: 23 },
  { id: 42, lastName: 'sravya', firstName: 'sri', age: 23 },
  { id: 43, lastName: 'likhitha', firstName: 'puvvala', age: 22 },
  { id: 44, lastName: 'anu', firstName: 'radha', age: 24 },
  { id: 45, lastName: 'kranthi', firstName: 'kuna', age: 22 },
  { id: 46, lastName: 'srivalli', firstName: 'vendra', age: 23},
  { id: 47, lastName: 'radha', firstName: 'sri', age: 44 },
  { id: 48, lastName: 'balu', firstName: 'yarramsetti', age: 36 },
  { id: 49, lastName: 'kavya', firstName: 'sri', age: 24 },
  { id: 50, lastName: 'uma', firstName: 'dasari', age: 24},
  { id: 51, lastName: 'sreeja', firstName: 'nalli', age: 22 },
  { id: 52, lastName: 'bhavya', firstName: 'cheday', age: 23 },
  { id: 53, lastName: 'lalitha', firstName: 'Arya', age: 16 },
  { id: 54, lastName: 'anusha', firstName: 'Daenerys', age: 23 },
  { id: 55, lastName: 'aruna', firstName: 'sri', age: 23 },
  { id: 56, lastName: 'kavyasri', firstName: 'Ferrara', age: 28 },
  { id: 57, lastName: 'hema', firstName: 'Rossini', age: 24 },
  { id: 58, lastName: 'Ramya', firstName: 'Harvey', age: 23 },
  { id: 59, lastName: 'swathi', firstName: 'sri', age: 24 },
  { id: 60, lastName: 'rao', firstName: 'Bhaskar', age: 25 },
  { id: 61, lastName: 'rajesh', firstName: 'Mohan', age: 24 },
  { id: 62, lastName: 'prakash', firstName: 'Bhanu', age: 24 },
  { id: 63, lastName: 'Sai', firstName: 'Lok', age: 23 },
  { id: 64, lastName: 'Narayan', firstName: 'Badri', age: null },
  { id: 65, lastName: 'Vinay', firstName: null, age: 25 },
  { id: 66, lastName: 'gopal', firstName: 'Venu', age: 25 },
  { id: 67, lastName: 'Jessy', firstName: 'Vikram', age: 22 },
  { id: 68, lastName: 'Viashnavi', firstName: 'vendra', age: 24 },
  { id: 69, lastName: 'kavya', firstName: 'pulaparthi', age: 22 },
  { id: 70, lastName: 'navya', firstName: 'golla', age: 23 },
  { id: 71, lastName: 'sravya', firstName: 'sri', age: 23 },
  { id: 72, lastName: 'likhitha', firstName: 'puvvala', age: 22 },
  { id: 73, lastName: 'anu', firstName: 'radha', age: 24 },
  { id: 74, lastName: 'kranthi', firstName: 'kuna', age: 22 },
  { id: 75, lastName: 'srivalli', firstName: 'vendra', age: 23},
  { id: 76, lastName: 'radha', firstName: 'sri', age: 44 },
  { id: 77, lastName: 'balu', firstName: 'yarramsetti', age: 36 },
  { id: 78, lastName: 'kavya', firstName: 'sri', age: 24 },
  { id: 79, lastName: 'uma', firstName: 'dasari', age: 24},
  { id: 80, lastName: 'sreeja', firstName: 'nalli', age: 22 },
  { id: 81, lastName: 'bhavya', firstName: 'cheday', age: 23 },
  { id: 82, lastName: 'lalitha', firstName: 'Arya', age: 16 },
  { id: 83, lastName: 'anusha', firstName: 'Daenerys', age: 23 },
  { id: 84, lastName: 'aruna', firstName: 'sri', age: 23 },
  { id: 85, lastName: 'kavyasri', firstName: null, age: 28 },
  { id: 86, lastName: 'hema', firstName: 'latha', age: 24 },
  { id: 87, lastName: 'Ramya', firstName: 'sri', age: 23 },
  { id: 88, lastName: 'swathi', firstName: 'sri', age: 24 },
  { id: 89, lastName: 'rao', firstName: 'Bhaskar', age: 25 },
  { id: 90, lastName: 'rajesh', firstName: 'Mohan', age: 24 },
  { id: 91, lastName: 'prakash', firstName: 'Bhanu', age: 24 },
  { id: 92, lastName: 'Sai', firstName: 'Lok', age: 23 },
  { id: 93, lastName: 'Narayan', firstName: 'Badri', age: null },
  { id: 94, lastName: 'Vinay', firstName: null, age: 25 },
  { id: 95, lastName: 'gopal', firstName: 'Venu', age: 25 },
  { id: 96, lastName: 'Jessy', firstName: 'Vikram', age: 22 },
  { id: 97, lastName: 'Viashnavi', firstName: 'vendra', age: 24 },
  { id: 98, lastName: 'kavya', firstName: 'pulaparthi', age: 22 },
  { id: 99, lastName: 'navya', firstName: 'golla', age: 23 },
  { id: 100, lastName: 'kavya', firstName: 'sri', age: 24 },
];

function App() {
  return (
    <div style={{ marginLeft:"400px",height: "100vh",width: '50%'}}>
      
      <DataGrid
      initialState={{
        pagination: {
          paginationModel: { page: 5, pageSize: 5,  },
        },
      }}
      pageSizeOptions={[5, 10, 15,]}
        rows={rows}
        columns={columns}
        
       
      />
    </div>
  );
}

export default App;
