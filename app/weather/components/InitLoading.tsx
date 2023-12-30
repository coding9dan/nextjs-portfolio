import React from "react";

interface Props {
  isLoading: boolean;
}

const InitLoading: React.FC<Props> = ({ isLoading }) => {
  return (
    <div style={{ display: isLoading ? "block" : "none" }}>
      <p className="text-white font-medium flex justify-center items-center h-screen">
        Fetching data ...
      </p>
    </div>
  );
};

export default InitLoading;
