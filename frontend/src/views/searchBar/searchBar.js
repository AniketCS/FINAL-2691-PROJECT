import './searchBar.css';
import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({placeholder,data}) {
    const[filteredData,setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord ===""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
         
    };
    return (
        <div class="Search-Bar-Container">
            <div class="searchBar">

                <form id="form">
                    <input type = "text" class = "inputField" placeholder ={placeholder} onChange={handleFilter} />
                   
                </form>
                <SearchIcon /> 
            </div>
            {filteredData.length !== 0 && (
                <div class="dataResult">
                {filteredData.map((value,key)=>{
                    return <a class="dataItem" href={value.link} >
                         <p>{value.title}</p> </a>
                })}
            </div>
            )}
        </div>
        
    )
}
