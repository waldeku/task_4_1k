import { useState } from "react";

import Main from "views/Main";
import BlueBox from "components/BlueBox/BlueBox";
import AddForm from "components/AddForm/AddForm";
import List from "components/List/List";
import { Employee } from "types/employees";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const getLastId = () =>
    employees.length ? employees[employees.length - 1].id + 1 : 1;
  const isDisabled = () => employees.length > 4;

  const handleSubmit = (employee: Employee) => {
    setEmployees([...employees, employee]);
  };

  const handleDeleteClick = (idToBeDeleted: number) => {
    setEmployees(employees.filter(({ id }) => id !== idToBeDeleted));
  };

  return (
    <Main>
      <BlueBox />
      <AddForm
        id={getLastId()}
        isDisabled={isDisabled()}
        onSubmit={handleSubmit}
      />
      <List employees={employees} onDelete={handleDeleteClick} />
    </Main>
  );
}

export default App;
