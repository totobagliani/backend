const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const { addProduct, getAllProducts, getProductsbyTerm } = require('./product');

dotenv.config();

jest.mock('../models/Product');

describe('Given the Product controller', () => {
  let req;
  let res;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When addProduct is triggered', () => {
    test('then All fields are correct then called to res.json()', async () => {
      req.body = {
        productName: 'Columna Inca',
        description:
          'Complemento ideal para cuarto de baño por su capacidad de almacenaje',
        imageURL: 'https://media.bahag.cloud/m/1280235/12.jpg',
        isFavourite: false,
        price: 79,
        section: 'baño',
      };

      await addProduct(req, res);
      expect(res.status).toHaveBeenCalled();
    });
    test('then fields no present then throw an response', async () => {
      jest
        .spyOn(Product.prototype, 'save')
        // eslint-disable-next-line prefer-promise-reject-errors
        .mockImplementationOnce(() => Promise.reject('fail update'));

      req.body = {};
      await addProduct(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('When getAllProducts is triggered', () => {
    test('then response with Product data', async () => {
      Product.find = jest.fn().mockReturnThis();

      await getAllProducts(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
    test('error', async () => {
      Product.find.mockRejectedValue('error');
      await getAllProducts(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe('When getProductsByTerm is triggered', () => {
    test('then response with matches search', async () => {
      req.query = { term: 'algo' };
      Product.find = jest.fn().mockReturnThis();

      await getProductsbyTerm(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
    test('then an error is occurred', async () => {
      req.query = { term: 'algo' };
      Product.find.mockRejectedValue('error');
      await getProductsbyTerm(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
