import { useState } from "react";

export function useLocalStorage (key:string, initialValue:any){

  const[storedValue, setStoredValue] = useState(()=>{
    if(typeof window === undefined){
      return initialValue;
    }

    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue= (value:any) =>{
    setStoredValue(value);
    if(typeof window !=='undefined'){
      localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue,setValue]
  }
}