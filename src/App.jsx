import Login from "./pages/login";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LaundryForm from "./page/LaundryForm";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />}>
//         <Route path="/" element={<LaundryForm />}>

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

export default App;
