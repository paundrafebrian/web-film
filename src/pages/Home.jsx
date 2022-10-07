import React from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"


const Home = (props) => {

  return (
    <div>
     <Main genre="popular"/>
     <Row title={props.search === "" ? "Popular Movie" : `Search result "${props.search}"`} fetchURL={requests.requestPopular} search={props.search} rowID= '1' genre="popular"/>
    </div>
  )
}

export default Home