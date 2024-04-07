import React, { useEffect, useState } from "react";
import Narbar from "./components/Narbar.jsx"
import Cards from "./components/Cards.jsx"
import { filterData, apiUrl } from "./data.js"
import Filter from "./components/Filter.jsx"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";
const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);  //set to ALL initially 
  async function fetchData() {
    setLoading(true)
    try {
      let data = await fetch(apiUrl);
      let ourData = await data.json();
      setCourses(ourData.data);
    }
    catch (error) {
      toast.error("network problem")
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return <div className="min-h-screen bg-blue-900 flex flex-col">
    <div>   <Narbar /></div>
    <div className="bg-blue-900">
      <div>   <Filter setCategory={setCategory} category={category} filterData={filterData}></Filter></div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center  flex-wrap  items-center min-h-[50vh] ">
        {
          loading ? (<Spinner />) : <Cards courses={courses} category={category} />
        }
      </div>
    </div>
  </div>;
};
export default App;
