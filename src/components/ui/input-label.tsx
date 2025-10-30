import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface LabeledInputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  type?: string;
  deffaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  errorMessage?: string;
  register?: UseFormRegisterReturn;
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
  register,
  errorMessage,
}: LabeledInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full py-2">
      <label className="font-bold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={deffaultValue}
        readOnly={readOnly}
        className={`border-2 rounded-md px-3 py-2 ${
          errorMessage
            ? "border-red-500 focus:border-red-500"
            : "border-gray-500 focus:outline-none focus:border-pink-400"
        } ${readOnly ? "bg-gray-200" : ""}`}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
