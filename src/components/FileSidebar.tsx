import React from "react";

interface FileSidebarProps {
  files : string[];
  onFileSelect : (file: string) => void;
  onDeleteFile : (file: string) => void;
  onNewFile : () => void;
}

const FileSidebar : React.FC<FileSidebarProps> = ({
  files,
  onFileSelect,
  onDeleteFile,
  onNewFile,
}) => {
  return(
        <div>
          <button onClick={onNewFile}>New File</button>
          <ul>
            {files.map((file)=>(
              <li key={file}>
                <span onClick={()=> onFileSelect(file)}>{file}</span>
                <button onClick={()=> onDeleteFile(file)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
  )
};

export default FileSidebar;
