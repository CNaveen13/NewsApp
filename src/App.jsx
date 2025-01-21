import Navbar from "./assets/components/navbar";
import NewsBoard from "./assets/components/newsboard";
import {useState} from "react";

const App = () =>{
  const[category,setCategory]=useState("general");
  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
    </div>
    
  )
}
export default App;