export const validateRequired = (value: string) =>
  !!value && value.trim() !== "";

export const validateName = (value: string) => {
  if (!value) return false;

  const nameRegex =
    /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm;
  const trimmedValue = value.trim().replace(/\s+/g, " ");

  return (
    nameRegex.test(trimmedValue) &&
    trimmedValue
      .split(" ")
      .every(
        (word: string) => word.length > 0 && word[0] === word[0].toUpperCase()
      )
  );
};

export const validateEmail = (value: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(value);
};

export const validatePhone = (value: string) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(value);
};

export const validatePassword = (value: string) => !!value && value.length >= 6;
