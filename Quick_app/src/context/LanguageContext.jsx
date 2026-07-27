import React,{
createContext,
useContext,
useState
} from "react";


import {

getLanguage,
saveLanguage

} from "../utils/settingsStorage";


const LanguageContext=createContext();



export const LanguageProvider=({children})=>{


const [language,setLanguageState]=useState(

getLanguage()

);



const setLanguage=(value)=>{

saveLanguage(value);

setLanguageState(value);

};



return(

<LanguageContext.Provider

value={

{

language,
setLanguage

}

}

>

{children}

</LanguageContext.Provider>

);


};



export const useLanguage=()=>{


return useContext(

LanguageContext

);


};