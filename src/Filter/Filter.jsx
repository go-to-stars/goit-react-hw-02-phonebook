import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
// import { Label, Input } from "./Filter.styled"; // імпорт стилів
import { Label, Input } from "../ContactForm/ContactForm.styled"; // імпорт стилів

export const Filter = ({ filter, changeFormData }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" value={filter} onChange={changeFormData} />
  </Label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFormData: PropTypes.func.isRequired,
};
