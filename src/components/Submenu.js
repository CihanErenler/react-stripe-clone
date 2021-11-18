import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import sublinks from "../data";

function Submenu() {
  const { location, isSubmenuOpen, dimentions, setDimentions } =
    useGlobalContext();
  const arrowRef = useRef(null);
  const innerContainer = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    arrowRef.current.style.left = location.location + "px";

    if (location.index > -1) {
      const width = sublinks[location.index].width;
      const height = sublinks[location.index].height;
      setDimentions({ height, width });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const returnClass = (index) => {
    if (location.index === -1) return "";
    if (index === location.index) return "";
    if (index > location.index) return "right";
    return "left";
  };

  const returnDimentions = (d) => {
    if (d === 480) return 50;
    if (d === 450) return 65;
    if (d === 430) return 75;
  };

  return (
    <React.Fragment>
      <div
        className={` ${isSubmenuOpen ? "sub-arrow show" : "sub-arrow"}`}
        ref={arrowRef}
      ></div>

      <section
        className={` ${
          isSubmenuOpen ? "submenu-container show" : "submenu-container"
        }`}
        ref={container}
        style={{
          height: `${dimentions.height}px`,
          width: `${dimentions.width}px`,
        }}
      >
        <div className="submenu-inner">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <div
                key={index}
                className={`${
                  location.page === page
                    ? "submenu-inner-content visible"
                    : "submenu-inner-content"
                } ${returnClass(index)}`}
                ref={innerContainer}
                style={{
                  marginLeft: `${returnDimentions(dimentions.width)}px`,
                }}
              >
                <h2 className="submenu-title">{page}</h2>
                <div className={page}>
                  {links.map((link, index) => {
                    const { label, url, icon } = link;
                    return (
                      <a
                        className="sub-link flex align-center"
                        key={index}
                        href={url}
                      >
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Submenu;
