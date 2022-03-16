function convertToJson(res) {
    let jsonResponse = res.json();
    if (res.ok) {
      return jsonResponse;
    } else {
      throw { name: "services error", message: jsonResponse };
    }
  }

export default class ExternalServices {
    constructor() {}
    getData() {
        console.log('made it to get data');
        return fetch("../dummy_movies.json").then(convertToJson).then(data => data)
    }
}