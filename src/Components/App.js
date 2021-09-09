import React, {useEffect } from "react"
import Router from "Components/Router"
import Header from "Components/Header"
import GlobalStyles from "Components/GlobalStyles"
import { WDOTInitialization } from "dop-website-sdk";

function App() {
  // 3rd-party tracker import
  useEffect(() => {
    WDOTInitialization.setConfig({
        serviceNumber:20045,
        dotAccessToken:"AgaCWt+E9pKnx5vijC6ZBQ1Eu7eyI7SKp7KIHoxbthlhH08GoUum0K2kmJg7/HuRARcv8D89eyGNzszJgiIzdg==",
        combackUserLimitDays:14,
        dotEndPoint:"//trk.analytics.wisetracker.co.kr/web/v1/dataRcv.do",
        adClkEndPoint:"//trk.analytics.wisetracker.co.kr/ldsys/v1/clickDataRcv.do",
        adLandingEndPoint:"//app.wisetracker.co.kr",
        includeUrl:"laflix.netlify.app",
        excludeUrl:"",
        referrerExpire:7
    });
    WDOTInitialization.init();
  }, []);
  
  let WDOT = window.WDOT;

  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
