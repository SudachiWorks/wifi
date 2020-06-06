import React from "react";
import QRCode from "qrcode.react";

export function Qr({ ssid, pass, size }) {
  const qrcode = `WIFI:T:WPA;S:${ssid};P:${pass};;`;

  return <QRCode className="qrcode" value={qrcode} size={size} />;
}
