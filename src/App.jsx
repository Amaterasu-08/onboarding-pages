import Page4 from "./Pages/Page4"
import Page5 from "./Pages/Page5"
import Page6 from "./Pages/Page6"
import Page7 from "./Pages/Page7"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import { useState } from "react"

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  const handleclick =()=>{
    setCurrentPage((prevpage) => prevpage + 1)
  }

  let Page;

  switch(currentPage){
    case 1:
      Page = Page1;
      break;
    case 2:
      Page = Page2;
      break;
    case 3:
      Page = Page3;
      break;
    case 4:
      Page = Page4;
      break;
    case 5:
      Page = Page5;
      break;
    case 6:
        Page = Page6;
        break;
    case 7:
      Page = Page7;
      break;
    default:
      Page = Page1;
  }

  return <Page onClick={handleclick} />

  
}

export default App
