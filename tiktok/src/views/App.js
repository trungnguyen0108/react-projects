import React from "react";
import ToDoList from "../components/ToDoList";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../views/App.css"

function App() {
  return (
    <div>
      <ToDoList></ToDoList>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* Same as */}
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App;