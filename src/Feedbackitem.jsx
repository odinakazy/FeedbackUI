import { FaTimes } from "react-icons/fa";
import Cards from "./Cards";
function Feedbackitem({ item, handleDelete }) {
  return (
    <Cards>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Cards>
  );
}

export default Feedbackitem;
