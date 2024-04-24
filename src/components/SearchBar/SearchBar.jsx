import { Search } from "@mui/icons-material";
import s from "./style.module.css";

export function SearchBar({ placeholder, onTextChange }) {

  return (
    
    <>
      <Search   className={s.icon} />
      <input 
        type="text"
        className={s.input}
        onChange={onTextChange}
        placeholder={placeholder}
        
      />
    </>
  );
}