
import axios from "axios";
import constants from "../config/constants";

const zipCodeService = axios.create({
    baseURL: constants.zipcode.url
});


export default zipCodeService