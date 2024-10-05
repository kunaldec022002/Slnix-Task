import React from "react";
import { languages } from "../utils/Languages";

interface LanguageSelectorProps {
  selectedLang : string;
  onLanguageChange: (langCode : string) => void;
}

const LanguageSelector : React.FC<LanguageSelectorProps> = ({
  selectedLang,
  onLanguageChange,
}) =>{
  return(
    <select value={selectedLang} onChange={(e)=> onLanguageChange(e.target.value)}>
      {
        languages.map((lang) =>(
          <option key={lang.langCode} value={lang.langCode}>{lang.langName}</option>
        ))
      }
    </select>
  );
};

export default LanguageSelector