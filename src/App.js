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
    },
    {
      id: "XM9141",
      createdAt: "8/21/2021",
      paymentDue: "9/20/2021",
      description: "Graphic Design",
      paymentTerms: 30,
      clientName: "Alex Grim",
      clientEmail: "alexgrim@mail.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "84 Church Way",
        city: "Bradford",
        postCode: "BD1 9PB",
        country: "United Kingdom",
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
      clientName: "John Morrison",
      clientEmail: "jm@myco.com",
      status: "Paid",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "79 Dover Road",
        city: "Westhall",
        postCode: "IP19 3PF",
        country: "United Kingdom",
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
      clientName: "Alysa Werner",
      clientEmail: "alysa@email.co.uk",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "63 Warwick Road",
        city: "Carlisle",
        postCode: "CA20 2TG",
        country: "United Kingdom",
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
      clientEmail: "mellisa.clarke@example.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "46 Abbey Row",
        city: "Cambridge",
        postCode: "CB5 6EG",
        country: "United Kingdom",
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
      clientName: "Thomas Wayne",
      clientEmail: "thomas@dc.com",
      status: "Pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "3964  Queens Lane",
        city: "Gotham",
        postCode: "60457",
        country: "United States of America",
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
      clientName: "Anita Wainwright",
      clientEmail: "",
      status: "Paid",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
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

  const [darkMode, setDarkMode] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
