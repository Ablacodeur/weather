import { useState, useEffect } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css"; // Importez votre module CSS

export function SearchBar({
  placeholder,
  onTextChange,
  value,
  locationList,
  onSearch
}) 
{
  const [showDatalist, setShowDatalist] = useState(locationList.length > 0); // Initialisez showDatalist en fonction de la longueur de locationList

  useEffect(() => {
    setShowDatalist(locationList.length > 0); // Mettez à jour showDatalist chaque fois que locationList change
  }, [locationList]);

  const handleSearchClick = () => {
    setShowDatalist(!showDatalist); // Afficher ou masquer la datalist à chaque clic sur l'icône de recherche
  };

  const handleOptionSelect = (selectedLocation) => {
    onTextChange(selectedLocation.name); // Mettre à jour la valeur de l'input avec le nom de la localité seulement
    setShowDatalist(false); // Masquer la datalist après avoir sélectionné une option
  };
  onSearch(locationList)

  // console.log(value);

  return (
    <div className={`input-group `} style={{ borderRadius:'25px',width:'300px' }} >
      <input
        type="text"
        className={`form-control ${s.input}`}
        list="datalistOptions"
        placeholder= {"Search city..."}
        onChange={onTextChange}
        style={{ backgroundColor:"transparent",border:'1px solid gray',color:'white'}}
      />
      {showDatalist && ( // Afficher la datalist seulement si showDatalist est true
        <datalist id="datalistOptions">
          {locationList.map((location, index) => (
            <option
              key={index}
              onClick={() => handleOptionSelect(location)} // Mettre à jour la valeur de l'input lorsqu'une option est sélectionnée
              value={`${location.name}, ${location.country}`}
            />
          ))}
        </datalist>
      )}
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleSearchClick}
        style={{ borderRadius:"0 32px 32px 0"}}
      >
        <SearchIcon   />
      </button>
    </div>
  );
}
