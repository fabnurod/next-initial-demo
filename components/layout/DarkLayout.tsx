import { FC, PropsWithChildren } from "react";

export const DarkLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{
        backgroundColor: "gray",
        borderRadius: "8px",
        padding: "20px",
      }}>
        <h3>Dark-Layout</h3>
        {children}
    </div>
  );
};
