import React, { useEffect, useState } from "react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';
import ph from "../../assets/ph-meter.svg";
import drop from "../../assets/drop.svg";
import api from "../../services/api";

import { ButtonsContainer, CardBody, Container, CardFull } from "./styles";

function Card() {
  const [info, setInfo] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);

  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const getInfo = async () => {
    try {
      const lastInfo = await api.get("/info/last");

      setInfo(lastInfo.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  async function getDayIlum(){
    handleShow();
    const day = await api.get('/byDay');
    setDay(day.data);
  }

  async function getMonthIlum(){
    handleShow1();
    const month = await api.get('/byMonth');
    setMonth(month.data);
  }

  async function getYearIlum(){
    handleShow2();
    const year = await api.get('/byYear');
    setYear(year.data);
  }

  async function getDayTemp(){
    handleShow3();
    const day = await api.get('/byDay');
    setDay(day.data);
  }

  async function getMonthTemp(){
    handleShow4();
    const month = await api.get('/byMonth');
    setMonth(month.data);
  }

  async function getYearTemp(){
    handleShow5();
    const year = await api.get('/byYear');
    setYear(year.data);
  }


  async function getDayAcidity(){
    handleShow6();
    const day = await api.get('/byDay');
    setDay(day.data);
  }

  async function getMonthAcidity(){
    handleShow7();
    const month = await api.get('/byMonth');
    setMonth(month.data);
  }

  async function getYearAcidity(){
    handleShow8();
    const year = await api.get('/byYear');
    setYear(year.data);
  }


  async function getDayMoist(){
    handleShow9();
    const day = await api.get('/byDay');
    setDay(day.data);
  }

  async function getMonthMoist(){
    handleShow10();
    const month = await api.get('/byMonth');
    setMonth(month.data);
  }

  async function getYearMoist(){
    handleShow11();
    const year = await api.get('/byYear');
    setYear(year.data);
  }


  useEffect(() => {
    getInfo();

    const interval = setInterval(() => {
      getInfo();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {/* Illumination begins */}
      {day && (
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Iluminação diária</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{day.ilum.toFixed(0)} lux</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {month && (
      <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Iluminação mensal</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{month.ilum.toFixed(0)} lux</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {year && (
      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Iluminação anual</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{year.ilum.toFixed(0)} lux</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {/* Illumination end */}

            {/* Temp begins */}
            {day && (
      <Modal show={show3} onHide={handleClose3} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Temperatura diária</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{day.temp.toFixed(2)} ºC</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {month && (
      <Modal show={show4} onHide={handleClose4} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Temperatura mensal</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{month.temp.toFixed(2)} ºC</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {year && (
      <Modal show={show5} onHide={handleClose5} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Temperatura anual</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{year.temp.toFixed(2)} ºC</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {/* Temp end */}

            {/* Acidity begins */}
            {day && (
      <Modal show={show6} onHide={handleClose6} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Acidez diária</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{day.acid.toFixed(0)} pH</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {month && (
      <Modal show={show7} onHide={handleClose7} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Acidez mensal</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{month.acid.toFixed(0)} pH</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {year && (
      <Modal show={show8} onHide={handleClose8} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Acidez anual</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{year.acid.toFixed(0)} pH</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {/* Acidity end */}

            {/* moist begins */}
            {day && (
      <Modal show={show9} onHide={handleClose9} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Umidade diária</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{day.umid.toFixed(0)} %</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {month && (
      <Modal show={show10} onHide={handleClose10} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Umidade mensal</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{month.umid.toFixed(0)} %</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose10}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {year && (
      <Modal show={show11} onHide={handleClose11} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Umidade anual</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h2>{year.umid.toFixed(0)} %</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose11}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)}

      {/* moist end */}

      
      {info && (
        <div className='ClassContainer'>
          <CardFull>
            <ButtonsContainer>
              <button onClick={getDayIlum}>Diário</button>
              <button onClick={getMonthIlum}>Mensal</button>
              <button onClick={getYearIlum}>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Iluminação</h4>
              <RiLightbulbFlashFill />
              <h2>{info.ilum.toFixed(0)} lux</h2>
            </CardBody>
          </CardFull>

          <CardFull>
            <ButtonsContainer>
              <button onClick={getDayTemp}>Diário</button>
              <button onClick={getMonthTemp}>Mensal</button>
              <button onClick={getYearTemp}>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Temperatura</h4>
              <FaTemperatureHigh />
              <h2>{info.temp.toFixed(0)} ºC</h2>
            </CardBody>
          </CardFull>

          <CardFull>
            <ButtonsContainer>
            <button onClick={getDayAcidity}>Diário</button>
              <button onClick={getMonthAcidity}>Mensal</button>
              <button onClick={getYearAcidity}>Anual</button>
            </ButtonsContainer>
            <CardBody>
              <h4>Acidez do solo</h4>
              <img src={ph} alt='Ph' />
              <h2>{info.acid.toFixed(0)} pH</h2>
            </CardBody>
          </CardFull>

          <CardFull>
            <ButtonsContainer>
            <button onClick={getDayMoist}>Diário</button>
              <button onClick={getMonthMoist}>Mensal</button>
              <button onClick={getYearMoist}>Anual</button>
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
