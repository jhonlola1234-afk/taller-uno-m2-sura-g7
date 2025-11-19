let parking = ["CarroA", "Libre", "Libre", "CarroB"];
console.log(parking);

parking.splice(0, 1);          
console.log(parking);

parking.splice(0, 2, "MotoA", "MotoB");
console.log(parking);