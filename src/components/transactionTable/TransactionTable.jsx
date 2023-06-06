import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./transactionTable.scss";

const TransactionTable = () => {
  const rows = [
    {id: 12345, product: "Product A", img: "", customer: "Bob", date: "1 March", amount: 765, method: "COD", status: "Approved"},
    {id: 12346, product: "Product B", img: "", customer: "Bob", date: "2 March", amount: 766, method: "COD", status: "Approved"},
    {id: 12347, product: "Product C", img: "", customer: "Bob", date: "3 March", amount: 767, method: "COD", status: "Approved"},
    {id: 12348, product: "Product D", img: "", customer: "Bob", date: "4 March", amount: 768, method: "COD", status: "Approved"},
    {id: 12349, product: "Product E", img: "", customer: "Bob", date: "5 March", amount: 769, method: "COD", status: "Approved"},
    {id: 12350, product: "Product F", img: "", customer: "Bob", date: "6 March", amount: 770, method: "COD", status: "Approved"},
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
