import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { View } from "./Pages/View/View";
import { Edit } from "./Pages/Edit";
import { Create } from "./Pages/Create/Create";
import { Header } from "./Components/Header";

function App() {
  const [listOfInvoices, setListOfInvoices] = useState([
    {
      id: "RT3080",
      createdAt: "8/18/2021",
      paymentDue: "8/19/2021",
      description: "Re-branding",
      paymentTerms: 1,
      clientName: "Jody Park",
      clientEmail: "jpark@mail.com",
      status: "Paid",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "106 Kendell Street",
        city: "Nutley",
        postCode: "07110",
        country: "United States",
      },
      items: [
        {
          name: "Brand Guidelines",
          quantity: 1,
          price: 1800.9,
          total: 1800.9,
        },
      ],
      total: 1800.9,
    },
    {
      id: "XM9141",
      createdAt: "8/21/2021",
      paymentDue: "9/20/2021",
      description: "Graphic Design",
      paymentTerms: 30,
      clientName: "Cesar Bell",
      clientEmail: "crbell@mail.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "84 Church Way",
        city: "Desoto",
        postCode: "75115",
        country: "United States",
      },
      items: [
        {
          name: "Banner Design",
          quantity: 1,
          price: 156.5,
          total: 156.5,
        },
        {
          name: "Email Design",
          quantity: 2,
          price: 200.1,
          total: 400.2,
        },
      ],
      total: 556.7,
    },
    {
      id: "RG0314",
      createdAt: "9/24/2021",
      paymentDue: "10/1/2021",
      description: "Website Redesign",
      paymentTerms: 7,
      clientName: "Gregg Meyer",
      clientEmail: "gmeyer@mail.com",
      status: "Paid",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "79 Dover Road",
        city: "Richmond",
        postCode: "23223",
        country: "United States",
      },
      items: [
        {
          name: "Website Redesign",
          quantity: 1,
          price: 14002.33,
          total: 14002.33,
        },
      ],
      total: 14002.33,
    },
    {
      id: "RT2080",
      createdAt: "10/11/2021",
      paymentDue: "10/12/2021",
      description: "Logo Concept",
      paymentTerms: 1,
      clientName: "Lucia Ball ",
      clientEmail: "luciaball@mail.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "63 Warwick Road",
        city: "Shrewsbury",
        postCode: "01545",
        country: "United States",
      },
      items: [
        {
          name: "Logo Sketches",
          quantity: 1,
          price: 102.04,
          total: 102.04,
        },
      ],
      total: 102.04,
    },
    {
      id: "AA1449",
      createdAt: "10/7/2021",
      paymentDue: "10/14/2021",
      description: "Re-branding",
      paymentTerms: 7,
      clientName: "Mellisa Clarke",
      clientEmail: "mellisa.clarke@mail.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "46 Abbey Row",
        city: "Portland",
        postCode: "04103",
        country: "United States",
      },
      items: [
        {
          name: "New Logo",
          quantity: 1,
          price: 1532.33,
          total: 1532.33,
        },
        {
          name: "Brand Guidelines",
          quantity: 1,
          price: 2500.0,
          total: 2500.0,
        },
      ],
      total: 4032.33,
    },
    {
      id: "TY9141",
      createdAt: "10/1/2021",
      paymentDue: "10/31/2021",
      description: "Landing Page Design",
      paymentTerms: 30,
      clientName: "Noel Houston",
      clientEmail: "noelhouston@mail.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "396 Bowman Lane",
        city: "Hamburg",
        postCode: "14075",
        country: "United States",
      },
      items: [
        {
          name: "Web Design",
          quantity: 1,
          price: 6155.91,
          total: 6155.91,
        },
      ],
      total: 6155.91,
    },
    {
      id: "FV2353",
      createdAt: "11/5/2021",
      paymentDue: "11/12/2021",
      description: "Logo Re-design",
      paymentTerms: 7,
      clientName: "Sophia Jenkins",
      clientEmail: "sjenkins@mail.com",
      status: "Paid",
      senderAddress: {
        street: "19 Union Terrace Ave.",
        city: "Jersey City",
        postCode: "07307",
        country: "United States",
      },
      clientAddress: {
        street: "305 Franklin St.",
        city: "Deer Park",
        postCode: "11729",
        country: "United States",
      },
      items: [
        {
          name: "Logo Re-design",
          quantity: 1,
          price: 3102.04,
          total: 3102.04,
        },
      ],
      total: 3102.04,
    },
  ]);

  const [currentInvoice, setCurrentInvoice] = useState({
    id: "RT3080",
    createdAt: "8/18/2021",
    paymentDue: "8/19/2021",
    description: "Re-branding",
    paymentTerms: 1,
    clientName: "Jensen Huang",
    clientEmail: "jensenh@mail.com",
    status: "Paid",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "106 Kendell Street",
      city: "Sharrington",
      postCode: "NR24 5WQ",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  });

  const [newInvoice, setNewInvoice] = useState({});

  const [darkMode, setDarkMode] = useState(checkTheme);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function checkTheme() {
    if (JSON.parse(localStorage.getItem("theme")) === true) {
      // DARK
      document.querySelector("body").style.background = "#141625";
      document.documentElement.style.setProperty("--input-auto-text", "white");
      document.documentElement.style.setProperty("--input-bg", "#1e2139");
      document.documentElement.style.setProperty("--input-text", "#fff");
      document.documentElement.style.setProperty("--input-border", "#252945");
      document.documentElement.style.setProperty("--box-shadow", "#00000040");
      document.documentElement.style.setProperty("--header-bg", "#1E2139");
      document.documentElement.style.setProperty("--text-color-swap", "#fff");
      document.documentElement.style.setProperty(
        "--light-text-color-swap",
        "#dfe3fa"
      );
      document.documentElement.style.setProperty("--home-list-bg", "#1e2139");
      document.documentElement.style.setProperty("--view-item-bg", "#000");
      document.documentElement.style.setProperty(
        "--view-item-single-bg",
        "#252945"
      );
      document.documentElement.style.setProperty("--create-bg", "#141625");
      document.documentElement.style.setProperty("--add-new-bg", "#252945");
      document.documentElement.style.setProperty("--discard-color", "#dfe3fa");
      document.documentElement.style.setProperty("--discard-bg", "#252945");
      document.documentElement.style.setProperty("--bottom-bar-bg", "#1e2139");
      console.log("dark");
      return JSON.parse(localStorage.getItem("theme"));
    } else if (JSON.parse(localStorage.getItem("theme")) === false) {
      // LIGHT
      document.querySelector("body").style.background = "#f8f8fb";
      document.documentElement.style.setProperty("--input-auto-text", "black");
      document.documentElement.style.setProperty("--input-bg", "#fff");
      document.documentElement.style.setProperty("--input-text", "#000");
      document.documentElement.style.setProperty("--input-border", "#dfe3fa");
      document.documentElement.style.setProperty("--box-shadow", "#48549f40");
      document.documentElement.style.setProperty("--header-bg", "#373B53");
      document.documentElement.style.setProperty("--text-color-swap", "#000");
      document.documentElement.style.setProperty(
        "--light-text-color-swap",
        "#888EB0"
      );
      document.documentElement.style.setProperty("--home-list-bg", "#fff");
      document.documentElement.style.setProperty("--view-item-bg", "#373B53");
      document.documentElement.style.setProperty(
        "--view-item-single-bg",
        "#F9FAFE"
      );
      document.documentElement.style.setProperty("--create-bg", "#fff");
      document.documentElement.style.setProperty("--add-new-bg", "#F9FAFE");
      document.documentElement.style.setProperty("--discard-color", "#7E88C3");
      document.documentElement.style.setProperty("--discard-bg", "#F9FAFE");
      document.documentElement.style.setProperty("--bottom-bar-bg", "#fff");
      console.log("light");
      return JSON.parse(localStorage.getItem("theme"));
    }
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function windowChange() {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/invoice-react"
          element={
            <Home
              listOfInvoices={listOfInvoices}
              setListOfInvoices={setListOfInvoices}
              setCurrentInvoice={setCurrentInvoice}
              darkMode={darkMode}
              windowWidth={windowWidth}
              newInvoice={newInvoice}
              setNewInvoice={setNewInvoice}
            />
          }
        />
        <Route
          path="/invoice-react/view"
          element={
            <View
              currentInvoice={currentInvoice}
              listOfInvoices={listOfInvoices}
              setListOfInvoices={setListOfInvoices}
              darkMode={darkMode}
              windowWidth={windowWidth}
            />
          }
        />
        <Route path="/edit" element={<Edit />} />
        <Route
          path="/invoice-react/create"
          element={
            <Create
              newInvoice={newInvoice}
              setNewInvoice={setNewInvoice}
              listOfInvoices={listOfInvoices}
              setListOfInvoices={setListOfInvoices}
              darkMode={darkMode}
              windowWidth={windowWidth}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
