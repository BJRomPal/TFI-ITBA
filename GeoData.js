import axios from 'axios';

const ENDPOINT = 'https://nominatim.openstreetmap.org/search?q=';
let patronRegex = new RegExp('^[0-9]', 'g');


export async function getCoordenadas(address, number ) {
  const urlString = `${ENDPOINT}${number}+${address}+Ciudad+de+Buenos+Aires&format=json`;
  try {
    const response = await axios.get(urlString);
    try {
      //console.log(response.data[0]['display_name'])
      var numero = patronRegex.test(response.data[0]['display_name']);
      if (numero) {
        var listaCoordenadas = [];
        listaCoordenadas.push(parseFloat(response.data[0]["lat"]));
        listaCoordenadas.push(parseFloat(response.data[0]["lon"]));
        console.log(listaCoordenadas);
        return listaCoordenadas;
      } else {
        return "La altura informada es incorrecta";
      }} catch (err) {
        return "Hay un error en la direccion proporcionada. Revisela";
      }
    } catch (err) {
      return `Hay un error ${err}`;
    }
}



