import React, { useState } from "react";
import "./styles.css";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import moment from "moment";

const Todo = ({ todo }) => {
  const [complete, setComplete] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <>
      {!complete ? (
        <button className="check-btn" onClick={() => setComplete(true)}>
          <svg viewBox="0 0 61 56">
            <g id="CheckButtonFalse" transform="translate(-88 -186.065)">
              <g
                id="Tracé_1"
                data-name="Tracé 1"
                transform="translate(88 186.065)"
                fill="none"
              >
                <path
                  d="M20,0H41A20,20,0,0,1,61,20V36A20,20,0,0,1,41,56H20A20,20,0,0,1,0,36V20A20,20,0,0,1,20,0Z"
                  stroke="none"
                />
                <path
                  d="M 20 8 C 13.38318252563477 8 8 13.38318252563477 8 20 L 8 36 C 8 42.61681747436523 13.38318252563477 48 20 48 L 41 48 C 47.61681747436523 48 53 42.61681747436523 53 36 L 53 20 C 53 13.38318252563477 47.61681747436523 8 41 8 L 20 8 M 20 0 L 41 0 C 52.04570007324219 0 61 8.954299926757813 61 20 L 61 36 C 61 47.04570007324219 52.04570007324219 56 41 56 L 20 56 C 8.954299926757813 56 0 47.04570007324219 0 36 L 0 20 C 0 8.954299926757813 8.954299926757813 0 20 0 Z"
                  stroke="none"
                  fill="#fc76a1"
                />
              </g>
            </g>
          </svg>
        </button>
      ) : (
        <button className="check-btn-true" onClick={() => setComplete(false)}>
          <svg viewBox="0 0 61 56">
            <g id="CheckButtonTrue" transform="translate(-88 -186.065)">
              <path
                id="Tracé_1"
                data-name="Tracé 1"
                d="M20,0H41A20,20,0,0,1,61,20V36A20,20,0,0,1,41,56H20A20,20,0,0,1,0,36V20A20,20,0,0,1,20,0Z"
                transform="translate(88 186.065)"
                fill="#fc76a1"
              />
              <path
                id="Icon_material-check"
                data-name="Icon material-check"
                d="M18.566,33.842,8.532,23.809,5.115,27.2,18.566,40.652,47.44,11.778,44.047,8.385Z"
                transform="translate(91.885 189.68)"
              />
            </g>
          </svg>
        </button>
      )}
      <p>{todo.message}</p>
      {!expand ? (
        <button
          className="expandBtn"
          style={{ color: "white" }}
          onClick={() => setExpand(true)}
        >
          <MoreHorizIcon fontSize="default" style={{ cursor: "pointer" }} />
        </button>
      ) : (
        <button
          className="expandBtn"
          style={{ color: "white" }}
          onClick={() => setExpand(false)}
        >
          <CloseIcon fontSize="default" style={{ cursor: "pointer" }} />
        </button>
      )}

      {expand ? (
        <div className="expand-container">
          <p>{moment(todo.createdAt).fromNow()}</p>
          <div>
            <button onClick={() => console.log("edit")}>
              <EditIcon />
            </button>
            <button onClick={() => console.log("delete")}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ) : null}

      {/* <span>{moment(todo.createdAt).fromNow()}</span>
      <button>Edit</button>
      <button>Delete</button> */}
    </>
  );
};

export default Todo;
