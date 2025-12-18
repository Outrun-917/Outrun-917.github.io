import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center font-space-grotesk">
      <Header />
      <Main />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
