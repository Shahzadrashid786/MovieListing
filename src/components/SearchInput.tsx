import React, { ChangeEvent, FC } from "react";

interface SearchInputProps {
  type: "search";
  name: string;
	cssClass: string;
  placeholder: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  type,
  name,
	cssClass,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
			className={cssClass}
      placeholder={placeholder}
			disabled={disabled}
      onChange={onChange}
    />
  );
};

export default SearchInput;
