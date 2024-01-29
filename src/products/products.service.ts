import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async getProducts() {
    try {
      return await this.prisma.product.findMany();
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async createProduct(data: CreateProductDto) {
    console.log('🚀 ~ ProductsService ~ createProduct ~ data:', data);
    try {
      const createdProduct = await this.prisma.product.create({
        data: data,
      });
      console.log(
        '🚀 ~ ProductsService ~ createProduct ~ createdProduct:',
        createdProduct,
      );
      return createdProduct;
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteProduct(id: number) {
    console.log('🚀 ~ ProductsService ~ deleteProduct ~ id:', id, typeof id);
    try {
      return await this.prisma.product.delete({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateProduct(id: number, data: CreateProductDto) {
    console.log('🚀 ~ ProductsService ~ deleteProduct ~ id:', id, typeof id);
    try {
      return await this.prisma.product.update({
        where: {
          id: Number(id),
        },
        data: data,
      });
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
