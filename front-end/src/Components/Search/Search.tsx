import { ChangeEventHandler } from "react";
import "./Search.scss"

type SearchProps = {
    searchTerm: string;
    handleInput: ChangeEventHandler<HTMLInputElement>;
  };
  
  const Search = ({ searchTerm, handleInput }: SearchProps) => {
    return (
      <div className="search-bar">
          <input
            type="text"
            placeholder="🔎 Search.."
            value={searchTerm}
            onChange={handleInput}
            className="search-bar__input"
          />
      </div>
    );
  };
  
  export default Search;