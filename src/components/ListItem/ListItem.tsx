import { useState } from "react";

import Button from "components/Button/Button";
import { Text } from "./ListItem.styled";

interface IListItem {
  name: string;
  surname: string;
  onDelete: VoidFunction;
}

const ListItem = ({ name, surname, onDelete }: IListItem) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <Text isSelected={isSelected}>{name}</Text>
      <Text isSelected={isSelected}>{surname}</Text>
      <div
        onMouseEnter={() => setIsSelected(true)}
        onMouseLeave={() => setIsSelected(false)}
      >
        <Button variant="secondary" text="Usuń" onClick={onDelete} />
      </div>
    </>
  );
};

export default ListItem;
