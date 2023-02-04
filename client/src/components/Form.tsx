import { useEffect, useState } from "react";
import "../styles/StyleForm.css";
import { useAppDispatch } from "../redux/hooks";
import { setTexts } from "../redux/slices/texts";

export const Form = () => {
  const [data, setData] = useState({
    text: "",
  });
  const [classMessage, setClassMessage] = useState("hide");
  const [characterCounter, setCharacterCounter] = useState(500);
  const [classButton, setClassButton] = useState("inactive_button");
  const dispatch = useAppDispatch();

  useEffect(() => {
    getText();
  });

  useEffect(() => {
    if (characterCounter === 0) {
      setClassMessage("show");
      
    }else if(characterCounter === 500){
        setClassButton('inactive_button')
    }else{
        setClassButton('form_button')
    }
  }, [characterCounter]);

  const checkTextLong = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value.length <= 500
      ? asignValues(e.target.value, e.target.name)
      : setClassMessage("show");
  };

  const asignValues = (value: string, name: string) => {
    setData({ ...data, [name]: value });
    setClassMessage("hide");
    setCharacterCounter(500 - value.length);
  };

  const submit = (e: React.FormEvent) => {
    setData({
      text: "",
    });
    fetch(`${process.env.REACT_APP_URL_SERVER}/text/addText`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCharacterCounter(500);
        window.alert(res.msg);
        getText();
      });
  };

  const getText = () => {
    fetch(`${process.env.REACT_APP_URL_SERVER}/text/getTexts`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setTexts(res));
      });
  };

  return (
    <div className="global_container_form">
      <form className="container_form">
        <textarea
          placeholder="Escribe aqui..."
          className="input_text_notas"
          name="text"
          value={data.text}
          onChange={(e) => checkTextLong(e)}
        />
      </form>
      <div className="container_parrafos">
        <p className={classMessage}>
          Has cumplido la cantidad de caracteres maximos del texto
        </p>
        <div className="container_button">
          <p>{`Caracteres faltantes: ${characterCounter}`} </p>
          <button
            disabled={classButton === "inactive_button" ? true : false}
            className={classButton}
            type="submit"
            onClick={submit}
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};
