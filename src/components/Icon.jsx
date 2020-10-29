import React from 'react';
import {IconContext} from "react-icons"

const Icon = ({ children }) => {
    return (
          <IconContext.Provider value={{ style: {fontSize: '40px', color: "black"}}}>
              <div>
                  { children }
              </div>
          </IconContext.Provider>
     )
  }

export default Icon;