import { CFormInput } from "@coreui/react";
import React from "react";

export const Seacrh = ({ search, searchInput, onChange }) => {
  return (
    <CFormInput
      style={{
        textAlign: "center",
        width: "320px",
      }}
      placeholder="Search your favorite character 🔎"
      onChange={(e) => onChange(e)}
      value={search}
      ref={searchInput}
    />
  );
};
