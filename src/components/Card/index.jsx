import React, { useEffect, useState } from "react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";
import ph from "../../assets/ph-meter.svg";
import drop from "../../assets/drop.svg";
import api from "../../services/api";

import { ButtonsContainer, CardBody, Container, CardFull } from "./styles";

function Card() {
  const [info, setInfo] = useState();

  const getInfo = async () => {
    try {
      const generate = await api.get("/generate");
      const lastInfo = await api.get("/info/last");

      console.log(generate);
      setInfo(lastInfo.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getInfo();

    const interval = setInterval(() => {
      getInfo();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {info && (
        <div className='ClassContainer'>
          <CardFull>
            <ButtonsContainer>
              <button>Diário</button>
              <button>Mensal</button>
              <button>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Iluminação</h4>
              <RiLightbulbFlashFill />
              <h2>{info.ilum.toFixed(0)} lux</h2>
            </CardBody>
          </CardFull>

          <CardFull>
            <ButtonsContainer>
              <button>Diário</button>
              <button>Mensal</button>
              <button>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Temperatura</h4>
              <FaTemperatureHigh />
              <h2>{info.temp.toFixed(0)} ºC</h2>
            </CardBody>
          </CardFull>

          <CardFull>
            <ButtonsContainer>
              <button>Diário</button>
              <button>Mensal</button>
              <button>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Acidez do solo</h4>
              <img src={ph} alt='Ph' />
              <h2>{info.acid.toFixed(0)} pH</h2>
            </CardBody>
          </CardFull>

          <CardFull>
            <ButtonsContainer>
              <button>Diário</button>
              <button>Mensal</button>
              <button>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Umidade</h4>
              <img src={drop} alt='drop' />
              <h2>{info.umid.toFixed(0)} %</h2>
            </CardBody>
          </CardFull>
        </div>
      )}
    </Container>
  );
}

export default Card;
