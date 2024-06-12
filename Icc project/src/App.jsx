import Rightcard from "./Compnent/Rightcard"
import Issue from "./Compnent/Issue"


function App() {


  return (
    <>
      <div className="main-page px-28 mt-10 flex items-center gap-10  ">
        <div className="right-side w-full ">
        <Rightcard></Rightcard>
        <Issue></Issue>
        </div>
      
        </div> 
    </>
  )
}

export default App
