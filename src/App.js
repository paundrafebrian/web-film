import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieDetails from "./pages/MovieDetails";
import { useState } from "react";
function App() {
  const [search,setSearch]= useState("")

  return (
    <div>
      <AuthContextProvider>
        <Navbar search={search} setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
            <Route path=":genre" element={<MovieList />}></Route>
            <Route path="/:genre/:movieId" element={<MovieDetails />}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
