"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ZoomableImage({ src, alt, className = "", ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const close = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") close();
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={() => setIsOpen(true)}
        {...props}
      />

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop layer */}
            {/** biome-ignore lint/a11y/noStaticElementInteractions: Necesary */}
            {/** biome-ignore lint/a11y/useKeyWithClickEvents: <Neccesary> */}
            <div
              className={`absolute inset-0 bg-black/35 backdrop-blur-sm transition-opacity duration-200 ${
                isClosing ? "animate-fade-out" : "animate-fade-in"
              }`}
              onClick={close}
            />

            {/* Content layer */}
            <div
              className={`relative z-[110] flex items-center justify-center p-4 pointer-events-none ${
                isClosing ? "animate-out" : "animate-in"
              }`}
            >
              <div className="relative pointer-events-auto">
                <button
                  type="button"
                  className="absolute top-2 right-2 p-2 text-white/70 hover:text-white transition-colors z-[120] bg-black/20 backdrop-blur-sm rounded-full"
                  onClick={close}
                  aria-label="Close fullscreen view"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Close</title>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <Image
                  src={src}
                  alt={alt}
                  {...props}
                  className="rounded-xl shadow-2xl w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain"
                  quality={100}
                  priority
                  sizes="90vw"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
