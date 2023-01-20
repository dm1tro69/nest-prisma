import { Prisma, Product } from "@prisma/client";

export class ProductEntity implements Product{
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  price: Prisma.Decimal
  sku: string
  published: boolean
}
