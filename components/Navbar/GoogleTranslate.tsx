"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  const initialized = useRef(false);

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (
        window.google?.translate?.TranslateElement &&
        !initialized.current
      ) {
        initialized.current = true;

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,si,ta",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    const scriptId = "google-translate-script";

    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");

      script.id = scriptId;

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;

      document.body.appendChild(script);
    } else {
      initializeGoogleTranslate();
    }

    return () => {
      window.googleTranslateElementInit = undefined;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-container"
    />
  );
}