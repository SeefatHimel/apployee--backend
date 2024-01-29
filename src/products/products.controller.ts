import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
  @Post('/create')
  createProduct(@Body() Body: CreateProductDto) {
    console.log('🚀 ~ ProductsController ~ createProduct ~ Body:', Body);
    return this.productsService.createProduct(Body);
  }

  @Delete('/delete/:id')
  deleteProduct(@Param('id') id) {
    return this.productsService.deleteProduct(id);
  }

  @Patch('/update/:id')
  updateProduct(@Param('id') id, @Body() Body: CreateProductDto) {
    return this.productsService.updateProduct(id, Body);
  }
}
