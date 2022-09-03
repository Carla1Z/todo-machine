import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // estamos llamando a localStorage para traernos algun elemento que nos envien como argumento(itemName)
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        //si no hay nada en localStorageItem
        if (!localStorageItem) {
          //si los usuarios no crearon nada, creamos un por defecto que sea un array vacio
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          //parsedItem va a ser un array con todos los TODOS que haya creado los usuarios
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        // setError(true)
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading };
}

export { useLocalStorage };
