import { useState, ChangeEvent, SyntheticEvent } from "react";

import { Employee } from "types/employees";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { FieldName } from "types/input";
import { ErrorMessage, Form } from "./AddForm.styled";

interface IAddForm {
  id: number;
  isDisabled: boolean;
  onSubmit: (employee: Employee) => void;
}

const initialState = {
  name: "",
  surname: "",
};

const AddForm = ({ id, isDisabled, onSubmit }: IAddForm) => {
  const [employee, setEmployee] = useState(initialState);
  const [isError, setIsError] = useState(false);
  const { name, surname } = employee;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: FieldName
  ) => {
    isError && setIsError(false);
    setEmployee({ ...employee, [fieldName]: e.target.value });
  };

  const handleAddButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();

    if (name !== "" && surname !== "") {
      setEmployee(initialState);
      onSubmit({ id, name, surname });
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <Form onSubmit={(e) => handleAddButtonClick(e)}>
        <Input
          name="name"
          value={name}
          placeholder="Imię"
          onChange={(e) => handleInputChange(e, "name")}
          disabled={isDisabled}
        />
        <Input
          name="surname"
          value={surname}
          placeholder="Nazwisko"
          onChange={(e) => handleInputChange(e, "surname")}
          disabled={isDisabled}
        />
        <Button type="submit" text="Dodaj pracownika" disabled={isDisabled} />
      </Form>
      {isError && (
        <ErrorMessage>Upewnij się, że podałeś poprawne dane.</ErrorMessage>
      )}
    </>
  );
};

export default AddForm;
