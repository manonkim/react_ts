import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // <input의타입속성>(default value)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    // 느낌표를 붙이면 current가 100% null일리 없다고 확신할 때 (enteredText : string)

    // const enteredText = todoTextInputRef.current?.value;
    // 물음표 IDE에서 자동생성 : ref가 아직 필수적으로 value를 설정하지않아서
    // enteredText는 undefined가 될수도 있고 string이 될수도있다(enteredText : string | undefined)

    if (enteredText?.trim().length === 0) {
      //throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      {/* ref지정 */}
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
