import React from "react";
import QRCode from "qrcode.react";
import { Gradient } from "react-gradient";

const GradientQRCode = ({ data }) => {
  // Mã màu của gradient
  const gradientColors = {
    start: "#ff0000", // Màu đỏ (#ff0000)
    end: "#0000ff", // Màu xanh dương (#0000ff)
  };

  // Cấu hình gradient
  const gradientConfig = {
    angle: 45,
    colors: [gradientColors.start, gradientColors.end],
    style: { borderRadius: 8 },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Gradient
        className="gradient"
        style={{
          width: 200, // Kích thước QR code
          height: 200, // Kích thước QR code
        }}
        {...gradientConfig}
      >
        <QRCode value={data} />
      </Gradient>
    </div>
  );
};

export default GradientQRCode;
