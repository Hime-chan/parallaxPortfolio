import React from "react";
import { UtilsContext, UtilsType } from "../context/utils";

export function useUtils(){
    return React.useContext(UtilsContext) as UtilsType;  
  }