import React, { useState } from "react";

import { getTodos } from "./ducks/todo";
import { connect } from "react-redux";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

function Dashboard(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {console.log(props)}
      <NewTodo status={openModal} close={() => setOpenModal(false)} />
      <div style={{ width: "98%", height: "98%", padding: "10px" }}>
        <div
          style={{
            margin: "0",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontFamily: "sans-serif" }}>ToDo List</h1>
          <button
            style={{
              backgroundColor: "#009688",
              borderRadius: 5,
              padding: 5,
              height: 30,
              border: "none",
              color: "#FFF",
              fontWeight: "bold",
            }}
            onClick={() => setOpenModal(true)}
          >
            Adicionar tarefa
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "space-around",
          }}
        >
          {props?.todos.length > 0
            ? props?.todos.map((todo) => <Todos todos={todo} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default connect(getTodos, () => ({}))(Dashboard);
