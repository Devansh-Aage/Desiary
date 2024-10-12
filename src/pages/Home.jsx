import React, { useState } from "react";

const Home1 = () => {
  const [isFooterExpanded, setFooterExpanded] = useState(false);

  const toggleFooter = () => {
    setFooterExpanded((prev) => !prev);
  };

  return (
    <div className=""></div>
  );
};

export default Home1;
