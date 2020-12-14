import React, { Component } from "react";
import './admin.css';
import { Button } from 'reactstrap';
import AdminNews from '../components/News/AdminNews'


export default function Admin() {




  return (

    <div className="main">

      <div className="admin" style={{ color: "white", textAlign: 'center', fontSize: "90px", fontFamily: "Courier" }}>
        <h1>Page admin</h1>
      </div>

      <AdminNews />

    </div>
  );
}