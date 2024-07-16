import React from 'react'
import "../styles/Home.css"
import Sidebar from "../Components/Sidebar"
import Feed from '../Components/Feed'

const Home = ({sidebar}) => {
  const [category, setCategory] = React.useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home