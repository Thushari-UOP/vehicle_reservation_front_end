import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    return <Component params={params} navigate={navigate} {...props} />;
  };

  
  return Wrapper;
};

// export const withParams = (Component) => {
//   const Wrapper = (props) => {
//     const params = useParams();

//     return <Component params={params} {...props} />;
//   };
//   return Wrapper;
// };
