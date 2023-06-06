// Temp
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: "user", headerName: "User", width: 230 , renderCell: (params)=> {
    return (
      <div className="cellWithImg">
        <img className="cellImage" src={params.row.img} alt="avatar" />
        {params.row.username}
      </div>
    )
  }},
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'status', headerName: 'Status', width: 160, renderCell: (params)=>{
    return (
      <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    )
  } },
];

export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Jon@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Cersei Lannister",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Cersei@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Jaime Lannister",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Jaime@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Arya Stark",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Arya@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Daenerys Targaryen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Daenerys@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Melisandre@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Ferrara Clifford",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Ferrara@gmail.com",
    age: 35,
  },
  {
    id: 8,
    username: "Rossini Frances",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Rossini@gmail.com",
    age: 35,
  },
  {
    id: 9,
    username: "Harvey Roxie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH5zpENpwGL1yfX6oMBT-NG-Xc_aOyHdxvA&usqp=CAU",
    status: "Active",
    email: "Harvey@gmail.com",
    age: 35,
  },
];
