const fs = require("fs").promises;
const path = require('path');

const getAllController = async (req, res) => {
  try {
    let fileData = await fs.readFile("data/db.json", "utf8");
    let fileArray = JSON.parse(fileData);

    if (!Array.isArray(fileArray)) {
      fileArray = [fileArray];
    }

    res.status(200).send({
      success: true,
      file: fileArray,
    });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).send({
      success: false,
      message: "Internal Error",
    });
  }
};

const searchItemsController = async (req, res) => {
  try {
    const { search } = req.body;
    console.log(search);

    // fetch file
    let fileData = await fs.readFile("data/db.json", "utf8");
    let fileArray = JSON.parse(fileData);

    if (!Array.isArray(fileArray)) {
      fileArray = [fileArray];
    }

    // search algorithm
    function searchAndSortByWord(dataArray, searchWord) {
      // Filter objects containing the searchWord in any of the specified properties
      const filteredArray = dataArray.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
          item.description.toLowerCase().includes(searchWord.toLowerCase()) ||
          item.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          item.location.toLowerCase().includes(searchWord.toLowerCase())
        );
      });

      // Sort the filtered array by title in alphabetical order
      const sortedArray = filteredArray.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      return sortedArray;
    }

    // Usage
    const searchWord = "Lorem"; // Replace with the word you want to search
    const resultArray = searchAndSortByWord(fileArray, search);

    console.log(resultArray);
    // console.log(keywords);
    res.status(200).send({
      success: true,
      file: resultArray,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      error: error.message,
      message: error.message,
    });
  }
};

const findImageController = async (req, res) => {
  try {
    const filename = req.params.filename;
    console.log(filename)
    const filePath = path.join(__dirname, "../public/images/", filename);
    console.log(filePath)
    // Send the image file if it exists
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(404).send({
          success: false,
          message: "Image not found",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getAllController,
  searchItemsController,
  findImageController,
};
