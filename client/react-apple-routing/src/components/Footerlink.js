import React, { useState, useEffect } from "react";

function Footerlink(props) {
  const [showContent, setShowContent] = useState(true);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setShowContent(false);
        setIcon(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick() {
    setShowContent((prevShowContent) => !prevShowContent);
    setIcon(!icon);
  }

  const { links } = props;

  return (
    <>
      <h3
        className={icon ? "iconp" : "iconx"}
        onClick={window.innerWidth < 768 ? handleClick : null}
      >
        {props.title}
      </h3>
      {showContent && (
        <ul>
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default Footerlink;
