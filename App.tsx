import React,{ useEffect, useState } from "react";

import { initI18n } from './src/i18n';
import SecretGuardianNavigation from "./src/navigation";
import SplashScreen from "./src/component/splashScreen";

const App = () => {
  const [ready, setReady] = useState(false);

  const loadApp = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setReady(true);
  };

  useEffect(() => {
    initI18n().then(() => loadApp());
  }, []);

  if (!ready) return <SplashScreen />;
  
  return (
    <SecretGuardianNavigation /> 
  );
};

export default App;
