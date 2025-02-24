import React from "react";
import "./Campo.css";

interface CampoProps {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "color";
  value: string;
  aoAlterado: (valor: string) => void;
  placeholder?: string;
  obrigatorio?: boolean;
}

const Campo = ({
  type,
  label,
  id,
  value,
  placeholder,
  aoAlterado,
  obrigatorio = false,
}: CampoProps) => {
  const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(event.target.value); // Agora sempre passa apenas a string
  };

  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={aoDigitado}
        placeholder={placeholder ? `${placeholder}...` : ""}
        required={obrigatorio}
      />
    </div>
  );
};

export default Campo;
