import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lexigramaUno from "../assets/lexigrama-uno.svg";
import lexigramaDos from "../assets/lexigrama-dos.svg";
import lexigramaTres from "../assets/lexigrama-tres.svg";
import lexigramaCuatro from "../assets/lexigrama-cuatro.svg";

function Carrusel() {
  const customDotStyles = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    margin: "0 8px",
  };

  return (
    <div>
      <style>
        {`
          ul.control-dots {
            display: flex;
            justify-content: center;
            list-style: none;
            padding: 0;
            position: relative;
          }

          ul.control-dots li {
            background-color: #222;
          }

          .carousel:hover .imagen {
            filter: saturate(100%);
          }

          .imagen {
            filter: saturate(0%);
            transition: filter 0.3s;
          }

          .carousel-root {
            border: 3px solid #222;
            max-width: 80%;
            margin: 0 auto;
            margin-bottom: 50px;
          }

          .carousel .control-prev.control-arrow:before {
            border-right: 8px solid #222;
          }

          .carousel .control-next.control-arrow:before {
            border-left: 8px solid #222;           
          }
        `}
      </style>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        stopOnHover={true}
        showStatus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const dotStyle = {
            backgroundColor: isSelected ? "#222" : "#9b9b9b",
            ...customDotStyles,
          };

          return (
            <li
              style={dotStyle}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div>
          <img className={`imagen`} src={lexigramaUno} alt="imagen proyecto" />
        </div>
        <div>
          <img className={`imagen`} src={lexigramaDos} alt="imagen proyecto" />
        </div>
        <div>
          <img className={`imagen`} src={lexigramaTres} alt="imagen proyecto" />
        </div>
        <div>
          <img
            className={`imagen`}
            src={lexigramaCuatro}
            alt="imagen proyecto"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carrusel;
