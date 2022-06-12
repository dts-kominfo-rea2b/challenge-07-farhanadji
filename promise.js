const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (review) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const result = [...theaterIXX, ...theaterVGC];
    return result.filter(data => data.hasil === review).length || 0;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
