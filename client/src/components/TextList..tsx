import { useAppSelector } from "../redux/hooks";
import blocImage from "../img/bloc.png";
import "../styles/StyleList.css";
import { useAppDispatch } from "../redux/hooks"
import { setTexts } from "../redux/slices/texts"

export const TextList = () => {
  const { textReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch()

  const deleteNote = (i:number)=>{
    fetch(`${process.env.REACT_APP_URL_SERVER}/text/deleteText/${i}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(res =>{
        alert(res.msg)
        getText()
    })
  }

  const getText = () =>{
    fetch(`${process.env.REACT_APP_URL_SERVER}/text/getTexts`)
    .then(res => res.json())
    .then(res =>{
        dispatch(setTexts(res))
    })
   }

  return textReducer.txt.length !== 0 ? (
    <div className="global_container_tittle">
         <h2>{textReducer.msg}</h2>
      <div className="global_container_cards">
        {textReducer.txt.map((texto, index) => {
          return (
            <div className="card_text" key={index}>
              <div className="container_icon_delete">
                <span onClick={()=>{deleteNote(index)}} className="material-symbols-outlined icon_delete">
                  delete
                </span>
              </div>
              <p>{texto}</p>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="global_container_without_texts">
      <img className="image_bloc" src={blocImage} alt="iconBloc.png" />
      <p>{textReducer.msg}</p>
    </div>
  );
};
