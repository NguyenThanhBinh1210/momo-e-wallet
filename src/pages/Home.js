import React from "react";
import "./styles/home.css";
import mobileMomoImg from "../images/momo-mobile-money.png";
import qrCodeBorderImg from "../images/qr-code-border.png";
import qrCodeBorderImg2 from "../images/Logo-MoMo-Square.png";
import { AiOutlineQrcode } from "react-icons/ai";
import CountdownTimer from "../components/OrderTime";
import { qr } from "../images/Qr";

const Home = () => {
  // const qrCodeData = "https://example.com";

  return (
    <div className="container">
      <div className="home-page">
        <div className="order">
          <div className="order-content">
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
                  <p>OD1690769483334</p>
                </li>
                <li className="info-list-item">
                  <h5>Mô tả</h5>
                  <p className="info-item-payment">
                    Thanh toan hoa don <br />{" "}
                    <span className="code-payment">OD1690769483334</span>
                  </p>
                </li>
                <li className="info-list-item">
                  <h5>Số tiền</h5>
                  <p className="order-price">10.000đ</p>
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
              <img className="qr-code-border" src={qrCodeBorderImg} alt="" />
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
              <span>Xem Hướng dẫn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
