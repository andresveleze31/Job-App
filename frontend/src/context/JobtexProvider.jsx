import { useState, useEffect, createContext } from "react";
import axios from "axios";

const JobtexContext = createContext();

const JobtexProvider = ({ children }) => {

    const [login, setLogin] = useState(false);

    return (
      <JobtexContext.Provider
        value={{
            login,
            setLogin
        }}
      >
        {children}
      </JobtexContext.Provider>
    );
};

export { JobtexProvider };

export default JobtexContext;