const DataModel = require('../models/data.model');

class Data {
  createNewData(request, response) {
    const { name, stock } = request.body;

    DataModel.createNewData(name, stock, (error, result) => {
      if (Object.keys(error).length !== 0) {
        return response.status(500).json(error);
      }

      response.status(200).json(result);
    });
  }

  deleteData(request, response) {
    const { id } = request.params;

    DataModel.deleteData(id, (error, result) => {
      if (Object.keys(error).length !== 0) {
        return response.status(500).json(error);
      }

      response.status(200).json(result);
    });
  }

  editData(request, response) {
    const { id } = request.params;
    const { stock } = request.body;

    DataModel.editData(id, stock, (error, result) => {
      if (Object.keys(error).length !== 0) {
        return response.status(500).json(error);
      }

      response.status(200).json(result);
    });
  }

  getAllData(request, response) {
    DataModel.getAllData((error, result) => {
      if (Object.keys(error).length !== 0) {
        return response.status(500).json(error);
      }

      response.status(200).json(result);
    });
  }

  getOneData(request, response) {
    const { id } = request.params;

    DataModel.getOneData(id, (error, result) => {
      if (Object.keys(error).length !== 0) {
        return response.status(500).json(error);
      }

      response.status(200).json(result);
    });
  }
}

module.exports = new Data();
