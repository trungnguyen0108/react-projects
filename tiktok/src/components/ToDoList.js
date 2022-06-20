import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {



    return (        
        <div>
            <ToDoForm></ToDoForm>
            <ToDo></ToDo>
        </div>
    )
}

export default ToDoList