import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import {  tokenService } from '../services';
import categoriesService from '../services/categories.service';

const createCategory = catchAsync(async (req, res) => {
  const { name } = req.body;

  const data = await categoriesService.createCategory(name)

  res.status(httpStatus.OK).send({
    data,
    message: 'Category created successfully',
   });
});

 const deleteCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const data = await categoriesService.deleteCategory(id)
    
    res.status(httpStatus.OK).send({
        ...data,
        message: 'Category deleted successfully',
     });
    });

const updateCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    
    const updatedCategory = await categoriesService.updateCategory(id, data)
    
    res.status(httpStatus.OK).send({
        updatedCategory,
        message: 'Category updated successfully',
     });
    }
    );


const getCategories = catchAsync(async (req, res) => {
    const data = await categoriesService.getCategories()
    
    res.status(httpStatus.OK).send({
        data,
        message: 'Categories retrieved successfully',
     });
    }
    );

const getCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const data = await categoriesService.getCategory(id)
    
    res.status(httpStatus.OK).send({
        data,
        message: 'Category retrieved successfully',
     });
    }
    );


export default {
  createCategory,
    deleteCategory,
    updateCategory,
    getCategories,
    getCategory
};
