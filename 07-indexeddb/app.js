// indexedDB: Reforzamiento

let request = window.indexedDB.open("mi-database", 1);

// Se actualizar cuando se crea o se sube de version en la base de datos
request.onupgradeneeded = (event) => {
  console.log("Actualizacion de BD");

  let db = event.target.result;

  db.createObjectStore("heroes", {
    keyPath: "id",
  });
};

// Manejo de errores
request.onerror = (event) => {
  console.log("DB error: ", event.target.error);
};

request.onsuccess = (event) => {
  let db = event.target.result;

  let heroesData = [
    { id: "1111", heroe: "Spiderman", mensaje: "Aqui su amigo Spiderman" },
    { id: "2222", heroe: "Iroman", mensaje: "Aqui en mi nuevo Mark 50" },
  ];

  let heroesTransaction = db.transaction("heroes", "readwrite");

  heroesTransaction.onerror = (event) => {
    console.log("Error guardando ", event.target.error);
  };

  // Informa sobre el exito de la transaccion
  heroesTransaction.oncomplete = (event) => {
    console.log("Transaccion hecha ", event);
  };

  let heroesStore = heroesTransaction.objectStore("heroes");

  for (let heroe of heroesData) {
    heroesStore.add(heroe);
  }

  heroesStore.onsuccess = (event) => {
    console.log("Nuevo item agregado a la base de datos");
  };
};
