"use client";

import { useEffect, useState } from "react";

const SessionExpired = () => {
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Verifica si estamos en el cliente antes de acceder a sessionStorage
    if (typeof window !== "undefined") {
      const emailID = sessionStorage.getItem("email_ID");
      setIsSessionExpired(!emailID);
    }
  }, []);

  useEffect(() => {
    if (isSessionExpired) {
      const timeout = setTimeout(() => {
        setSecondsElapsed((prev) => prev + 1);
        setProgress((prev) => Math.min(prev + 10, 100));
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isSessionExpired, secondsElapsed, progress]);

  if (!isSessionExpired) {
    return null;
  }

  const message = secondsElapsed >= 10 ? "Session Expired" : "Loading...";

  return (
    <div className="fixed z-50 w-screen flex items-center justify-center h-screen bg-colorBase">
      <div className="text-center p-6 bg-neutral-800 shadow-lg rounded-lg w-80">
        <h2 className="text-xl font-semibold text-colorBase">{message}</h2>

        {secondsElapsed < 10 && (
          <div className="mt-4">
            {/* Progress bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between"></div>
              <div className="flex mb-2">
                <div className="w-full bg-subtitle rounded-full h-2.5">
                  <div
                    className="bg-lime-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <p className="text-colorBase">Verifying credentials</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionExpired;
