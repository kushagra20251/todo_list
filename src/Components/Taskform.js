import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.css";
export default function Taskform(props) {
  const [task, settask] = useState("");
  const [showerror, setshowerror] = useState("");
  const handleChange = (event) => {
    settask(event.target.value);
    if (task.length >= 5) {
      setshowerror("");
    }
  };
  const refreshinput = () => {
    settask("");
  };
  return (
    <div className="list">
      <h1>ToDo List App</h1>
      <Form
        onSubmit={(event) => {
          if (task.length < 5) {
            event.preventDefault();
            setshowerror("Please enter task with more than 5 letters.");
          } else {
            props.handleSubmit(event, task);
            refreshinput();
            setshowerror("");
          }
        }}
      >
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="              Enter Tasks Here "
            value={task}
            onChange={handleChange}
            className="inputField"
          />
          <div >
            press enter to add task
          </div>
          <Form.Text className="error">{showerror}</Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}
