import { Employee } from "types/employees";
import ListItem from "components/ListItem/ListItem";
import { Wrapper } from "./List.styled";

interface IList {
  employees: Employee[];
  onDelete: (id: number) => void;
}

const List = ({ employees, onDelete }: IList) => {
  const employeeList = () =>
    employees.map(({ id, name, surname }) => (
      <ListItem
        key={id}
        name={name}
        surname={surname}
        onDelete={() => onDelete(id)}
      />
    ));

  return <Wrapper>{employeeList()}</Wrapper>;
};

export default List;
