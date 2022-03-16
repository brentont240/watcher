import ExternalServices from "./externalServices.js";
import { loadHeaderFooter } from "./utils.js";

const data = new ExternalServices
loadHeaderFooter();
// let info = data.getData();

async function dataGet() {
    let info = await data.getData();
    console.log(info);
}

dataGet();