import axios from "axios";

const AntidepressantGuideUpdate = async (name, column, value) => {
  try {
    const response = await axios.post(
      "https://gpgc-server.vercel.app/api/AntidepressantGuide/update",
      {
        name,
        column,
        value,
      }
    );
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};

export default AntidepressantGuideUpdate;
