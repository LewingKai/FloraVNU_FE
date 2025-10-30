import React from "react";

export interface LabeledInputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  type?: string;
  deffaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export default function LabeledInput({
  label,
  required = false,
  placeholder = "",
  name,
  type = "text",
  deffaultValue,
  disabled = false,
  readOnly = false,
}: LabeledInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full py-2">
      <label className="font-bold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        defaultValue={deffaultValue}
        readOnly={readOnly}
        className={`border-gray-500 border-2 rounded-md px-3 py-2 ${readOnly ? "bg-gray-200 focus:none" : "  focus:outline-none  focus:border-pink-400 "}`}
      />
    </div>
  );
}
