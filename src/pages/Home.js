import React, { useRef } from "react";
import "./styles/home.css";
import mobileMomoImg from "../images/momo-mobile-money.png";
import qrCodeBorderImg from "../images/border.svg";
import qrCodeBorderImg2 from "../images/Logo-MoMo-Square.png";
import { AiOutlineQrcode } from "react-icons/ai";
import CountdownTimer from "../components/OrderTime";
import GradiantImg from "../images/qrcode-gradient.png";
import { qr } from "../images/Qr";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [responseBody, setResponseBody] = useState(null);
  useEffect(() => {
    const requestData = {
      type: "link",
      data: "https://google.com",
      background: "rgb(255,255,255)",
      foreground: "rgb(0,0,0)",
      logo: "https://site.com/logo.png",
    };

    const config = {
      headers: {
        Authorization: "Bearer c6954a4fc7e3f50d1518e45be22b0ada",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: requestData,
    };

    axios
      .post("https://bio.ziller.vn/api/qr/add", config)
      .then((response) => {
        setResponseBody(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  const divRef = useRef(null);
  const buttonRef = useRef(null);
  function generateRandomNumber() {
    const min = 10 ** 12;
    const max = 10 ** 13 - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber = generateRandomNumber();
  const handleShow = () => {
    divRef.current.classList.toggle("display-none");
    buttonRef.current.classList.toggle("show");
  };
  return (
    <div className="container">
      <div className="home-page">
        <div className="order">
          <div ref={buttonRef} className="show-more" onClick={handleShow}>
            <span>Xem chi tiết</span>{" "}
            <span>
              <svg
                fill="#000000"
                width="16px"
                height="16px"
                viewBox="-1 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                className="cf-icon-svg"
              >
                <path d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z" />
              </svg>
            </span>
          </div>
          <div ref={divRef} className="order-content display-none">
            <div className="order-info">
              <ul className="info-list">
                <li className="info-list-item">
                  <h3 className="info-list-title">Thông tin đơn hàng</h3>
                  <h5>Nhà cung cấp</h5>
                  <div className="info-provider">
                    <img src={mobileMomoImg} alt=""></img>
                    <h4>MoMo</h4>
                  </div>
                </li>

                <li className="info-list-item">
                  <h5>Mã đơn hàng</h5>
                  <p>{`OD${randomNumber}`}</p>
                </li>
                <li className="info-list-item">
                  <h5>Mô tả</h5>
                  <p className="info-item-payment">
                    Thanh toan hoa don <br />{" "}
                    <span className="code-payment">{`OD${randomNumber}`}</span>
                  </p>
                </li>
              </ul>
            </div>
            <CountdownTimer />
            <a className="back-btn" href="#">
              Quay về
            </a>
          </div>
          <div className="qr-code">
            <h1 className="qr-code-title">Quét mã QR để thanh toán</h1>
            <div className="qr-code-content">
              <img className="qr-code-img" src={qr} alt="" />
              <div className="qr-code-border">
                <img src={qrCodeBorderImg} alt="" />
                <img className="animation" src={GradiantImg} alt="" />
              </div>
              <div className="qr-code-wrapper">
                <img className="icon-wrap" src={qrCodeBorderImg2} alt="" />
              </div>
            </div>

            <div className="qr-code-node">
              <AiOutlineQrcode className="qr-code-icon" />
              <p>
                Sử dụng<b> App MoMo </b>hoặc ứng dụng <br /> camera hỗ trợ QR
                code để quét mã
              </p>
            </div>
            <div className="support-payment">
              <p>Gặp khó khăn khi thanh toán?</p>
              <span>
                <a href="https://momo.vn/hoi-dap">Xem Hướng dẫn</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1>QR Code Response</h1>
      {responseBody && <pre>{JSON.stringify(responseBody, null, 2)}</pre>}
    </div>
  );
};

export default Home;
