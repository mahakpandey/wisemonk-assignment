import { MotionDiv } from "../../shared/ui/Motion";

const Card = ({ children, className = "" }) => {
  return (
    <MotionDiv
      className={`${className} px-5 py-4 bg-white rounded-lg shadow-xs`.trim()}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionDiv>
  );
};

export default Card;
