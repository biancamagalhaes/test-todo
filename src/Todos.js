import React, { useState } from "react";

function Todo(props) {
  const [openList, setOpenList] = useState("none");
  const { todos } = props;
  return (
    <div
      style={{
        width: 270,
        boxShadow: "rgba(50, 50, 50, 0.34) 0px 3px 16px -1px",
        padding: "10px",
        margin: "10px",
      }}
    >
      {todos.image != "" ? (
        <img
          alt="Images"
          style={{ width: "100%", height: 150, backgroundColor: "red" }}
          src={todos.image}
        />
      ) : null}
      <h3 style={{ fontFamily: "sans-serif" }}>{todos.title}</h3>
      <p style={{ fontFamily: "sans-serif" }}>{todos.description}</p>
      {todos.list.length > 0 ? (
        <button
          style={{
            backgroundColor: openList === "none" ? "#2196F3" : "#F44336",
            borderRadius: 5,
            padding: 5,
            border: "none",
            color: "#FFF",
            fontWeight: "bold",
          }}
          onClick={() => setOpenList(openList === "block" ? "none" : "block")}
        >
          {openList === "block" ? "Fechar lista" : "Abrir lista"}
        </button>
      ) : null}
      <ul style={{ display: openList }}>
        {todos.list?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
