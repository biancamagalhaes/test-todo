import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo, getTodos } from "./ducks/todo";

function NewTodo(props) {
  const [linkImage, setLinkImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [itemList, setItemList] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    let todo = {
      image: linkImage,
      title: title,
      description: description,
      list: list,
    };
    props.addTodo(todo);
    setDescription("");
    setList([]);
    setTitle("");
    setLinkImage("");
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#0000005c",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: props.status ? "flex" : "none",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "70%",
          backgroundColor: "#FFFF",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontFamily: "sans-serif", margin: "0 0 5vh 0" }}>
            Adicionar nova tarefa
          </h2>
          <button
            style={{
              backgroundColor: "#E91E63",
              borderRadius: 5,
              padding: 5,
              border: "none",
              color: "#FFF",
              fontWeight: "bold",
              height: 25,
              marginTop: "2%",
            }}
            onClick={() => {
              handleSubmit();
              props.close();
            }}
          >
            Enviar
          </button>
        </div>
        <input
          placeholder="Link da imagem"
          value={linkImage}
          onChange={(event) => setLinkImage(event.target.value)}
          style={{
            border: "none",
            borderBottom: "solid 1px gray",
            margin: "0 0 5vh 0",
          }}
        />
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{
            border: "none",
            borderBottom: "solid 1px gray",
            margin: "0 0 5vh 0",
          }}
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{
            border: "none",
            borderBottom: "solid 1px gray",
            margin: "0 0 5vh 0",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="Adicionar item a lista"
            onKeyPress={(event) =>
              event.key === "Enter"
                ? (setList([...list, itemList]), setItemList(""))
                : null
            }
            style={{
              border: "none",
              borderBottom: "solid 1px gray",
            }}
            value={itemList}
            onChange={(event) => setItemList(event.target.value)}
          />
          {list.length > 0 ? (
            <div>
              <h5 style={{ fontFamily: "sans-serif", marginBottom: 0 }}>
                Lista:
              </h5>
              <ol>
                {console.log("----->", list)}
                {list.map((item, index) => (
                  <li
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "0.67em",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3>{item}</h3>
                      <button
                        style={{
                          border: "none",
                          textDecoration: "underline",
                          backgroundColor: "transparent",
                          color: "red",
                        }}
                        onClick={() => {
                          const lis = list;
                          lis.splice(index, 1);
                          console.log("!@#$", lis);
                          setList([...lis]);
                          console.log("2", list);
                        }}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default connect(getTodos, (dispatch) => ({
  addTodo: (x) => dispatch(addTodo(x)),
}))(NewTodo);
