import React,{useState} from "react";

function SearchBar({onSearch}){
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()){
            onSearch(city);
            setCity('');
        }
    }

    return(
        <form className="search" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="City Name"
            spellCheck='false'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;