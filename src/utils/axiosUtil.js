import axios from "axios";
import EnvironmentUtil from "./environmentUtil";

const instance = axios.create(EnvironmentUtil());

export default instance;
