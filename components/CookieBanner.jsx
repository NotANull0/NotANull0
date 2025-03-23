"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import config from "@/config";
import Btn from "@/components/Btn";
import "@/css/cookie-banner.scss";

function updateConsent(status) {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('consent', 'update', {
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
    analytics_storage: status,
  });
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(true);
  const cookieKey = `${config.prefix}-analytics-consent`;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const hasConsent = localStorage.getItem(cookieKey);
    if (hasConsent === null) {
      setIsVisible(true);
      setIsMoving(false);
      return;
    }

    const status = hasConsent === "true" ? "granted" : "denied";
    updateConsent(status);
  }, [cookieKey]);

  const hideBanner = () => {
    setIsMoving(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 600);
  }

  const handleAccept = () => {
    hideBanner();
    localStorage.setItem(cookieKey, "true");
    updateConsent('granted');
  };

  const handleDecline = () => {
    hideBanner();
    localStorage.setItem(cookieKey, "false");
    updateConsent('denied');
  };

  return (
    <div
      id="cookie-wrapper"
      className={
        isVisible ? "block" : "hidden" +
          " " +
          isMoving ? "translate-y-full" : "translate-y-0"
      }
    >
      <div id="cookie-banner">
        <p>
          By using our services you agree to our {" "}
          <Link href="/privacy-policy" className="link">Privacy Policy</Link> and {" "}
          <Link href="/terms-of-service" className="link">Terms of Service</Link>.
          We use cookies on our site to improve user experience. To continue using our
          services please allow the use of cookies.
        </p>
        <div>
          <Btn
            className="btn-red"
            onClick={handleDecline}
          >
            Decline
          </Btn>
          <Btn
            className="btn-green"
            onClick={handleAccept}
          >
            Accept
          </Btn>
        </div>
      </div>
    </div >
  )
}