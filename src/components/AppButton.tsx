import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const AppButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 bg-purple-600 hover:bg-purple-800 text-gray-50 rounded-md duration-200 cursor-pointer"
    >
      {children}
    </button>
  );
};
