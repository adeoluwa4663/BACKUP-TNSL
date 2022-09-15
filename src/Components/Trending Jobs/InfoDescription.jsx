import React, { useState } from "react";
import { Link } from "react-router-dom";
  
const ReadMore = ({ children, num }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const url = `/jobs/offer_desc/`

  const linkToOffer = <Link className="infolink" to={url}  style={{fontSize:'1em'}}>Read more</Link>
  
  return (
    <p className="about">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read">
        {isReadMore ? linkToOffer : " show less"}
      </span>
    </p>
  );
};
  
const Content = (props) => {
  return (
    <div className="contain">
      <p>
        <ReadMore>
            Lorem ipsum dolor ontinuitifjknsjksdnkslkksljdkeekledkdn....
        </ReadMore>
      </p>
    </div>
  );
};
  
export default Content;