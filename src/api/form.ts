import axios from "axios";

type Data = {
  name: string;
  count: 0 | 1 | 2;
};

export async function sendForm(data: Data) {
  const response = await axios.post("https://www.bugfix.kz/toi/add", data);
  return response.data;
}
