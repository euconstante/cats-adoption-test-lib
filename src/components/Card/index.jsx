import { useContext, useState } from "react";
import heartFilled from "../../assets/heartFilled.svg";
import heartOutlined from "../../assets/heartOutlined.svg";
import { PetsContext } from "../Pets";
import "./style.css";

const Card = ({ name, phone, email, image, favoured, index }) => {
  const { cats, setCats } = useContext(PetsContext);
  const [isFavoured, setIsFavoured] = useState(favoured);

  const updateFavourite = (index, favoured) => {
    const updatedCats = [...cats];
    updatedCats[index].favoured = favoured;
    setCats(updatedCats);
  };

  const toggleFavoured = () => {
    updateFavourite(index, !isFavoured);
    setIsFavoured(!isFavoured);
  };

  return (
    <article className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img" />
        <button className="heart" onClick={toggleFavoured}>
          {isFavoured ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outlined heart" />
          )}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
