import React from "react";

const FileItem = (props) => {
  const className = "fileItem";

  return (
    <div className={`${className}`}>
      <div className={`${className}__notices`}>
        <p className={`${className}__noticesItem`}>
           Примечание 1
        </p>
        <p className={`${className}__noticesItem`}>
          Примечание 2
        </p>
        <p className={`${className}__noticesItem`}>
          Примечание 3
        </p>
      </div>
    </div>
  );
};

export default FileItem;