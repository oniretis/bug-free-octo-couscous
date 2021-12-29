import React from "react";
import { Autocomplete } from "@react-google-maps/api";

function Header() {
  return (
    <nav className="flex flex-row justify-around mt-7">
      <div className="font-bold">
        <h1>Travel companion</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <h1 className="font-light">explore new places</h1>
        <Autocomplete>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </Autocomplete>
        
      </div>
    </nav>
  );
}

export default Header;
