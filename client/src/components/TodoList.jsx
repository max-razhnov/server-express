// @flow
import React from "react";
import Input from "./Input";

type Props = {
  todoItems?: Array<object>,
  removeItem?: Function | object,
  completeItem?: Function | object
};

const TodoList = (props: Props) => {
  const { todoItems, removeItem, completeItem } = props;

  return todoItems.length !== 0
    ? todoItems.map<object>((item: object, id: number) => {
        return (
          <div key={id} className="field">
            <p className="control has-icons-left has-icons-right">
              <Input
                type="email"
                value={item.value}
                id={id}
                readOnly
                done={item.done}
                style={item.done ? "red" : "green"}
              />
              <span
                className="icon is-small is-left"
                style={{ background: "none", border: "none" }}>
                <i
                  id={id}
                  className={
                    item.done ? "fas fa-minus-circle" : "fas fa-check-circle"
                  }
                  style={{
                    color: item.done ? "red" : "green",
                    pointerEvents: "auto"
                  }}
                  onClick={(ev: SyntheticEvent<HTMLButtonElement>) => {
                    completeItem(+ev.currentTarget.id);
                  }}></i>
              </span>
              <span className="icon is-small is-right">
                <i
                  id={id}
                  className="delete"
                  onClick={(ev?: SyntheticEvent<HTMLButtonElement>) => {
                    removeItem(+ev.currentTarget.id);
                  }}>
                  >
                </i>
              </span>
            </p>
          </div>
        );
      })
    : null;
};

export default TodoList;
