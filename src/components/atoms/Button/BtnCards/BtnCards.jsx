import { Anchor } from "./BtnCards.style";
import theme from "@/theme/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BtnCards = () => {
  return (
    <Anchor theme={theme} href="">
      Tu Receta <FontAwesomeIcon icon={faAngleRight} />
    </Anchor>
  );
};

export default BtnCards;
