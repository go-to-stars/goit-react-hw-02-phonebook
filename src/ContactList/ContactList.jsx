import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { List, ListItem, Text, Button } from "./ContactList.styled"; // імпорт стилів

export const ContactList = ({ apdatedContacts, deleteContact }) => (
  <List>
    {apdatedContacts.map((item) => (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.name}
        number={item.number}
      >
        <Text>
          &#8226; {item.name}: {item.number}
        </Text>
        <Button type="button" onClick={() => deleteContact(item.id)}>
          Delete
        </Button>
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  apdatedContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
