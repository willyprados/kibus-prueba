import { Anchor } from "./BtnSecundary.style";
import theme from "@/theme/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BtnSecundary = () => {
  return (
    <Anchor theme={theme} href="">
      Quiero saber más <FontAwesomeIcon icon={faAngleRight} />
    </Anchor>
  );
};

export default BtnSecundary;
