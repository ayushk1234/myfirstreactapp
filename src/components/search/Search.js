import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geourl ,options} from "../../api";
const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchdata) => {
        setSearch(searchdata)
        onSearchChange(searchdata)



    }

    const loadOptions= (inputValue)=>{
        return fetch(`${geourl}?minPopulation=1000000&namePrefix=${inputValue}`, 
        options)
        .then((response)=> response.json())
        .then((response)=>{
            return {
                options:response.data.map((city)=>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ,${city.countryCode}`
                    }

                })
            }
        })
        .catch ((error) =>
            console.error(error)
        )

    }

    return (
        <AsyncPaginate
            placeholder="Search for cities"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}

        />
    )
}
export default Search