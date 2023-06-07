import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TransactionTable from "../../components/transactionTable/TransactionTable";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={3/1} title={"Last 6 Months (Revenue)"}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
