import { User, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import prisma from '../client';
import { encryptPassword } from '../utils/encryption';

const createCategory = (
  name: string,
  
) => {
  return prisma.category.create({
    data:{
        name
    }
  })

}

const deleteCategory = (id: string) => {
    return prisma.category.delete({
        where: {
            id
        }
    })
}

const updateCategory = (id: string, data: Prisma.CategoryUpdateInput) => {
    return prisma.category.update({
        where: {
            id
        },
        data
    })
}

const getCategories = () => {
    return prisma.category.findMany()
}

const getCategory = (id: string) => {
    return prisma.category.findUnique({
        where: {
            id
        }
    })
}



export default {
  createCategory,
    deleteCategory,
    updateCategory,
    getCategories,
    getCategory
        
 
};
