import {
  Resolver, Query, Mutation, Arg, ObjectType, Field,
  Ctx, UseMiddleware, Int
} from 'type-graphql'
import { Book } from '~/model'
import { Books } from '~/mock'
import { BookInput } from '~/schemas/input'

@ObjectType()
export class User {
  @Field(() => String)
  id!: string

  @Field() // () => String은 생략가능
  email!: string

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  username?: string

  @Field(() => Int, { nullable: true })
  age?: number
}

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  books(): Book[] {
    return Books.books
  }

  @Query(() => Book)
  findBookById(
    @Arg('id', type => Int, { description: '책 아이디 값' }) id: number
  ): Book | undefined {
    return Books.books.find(book => book.id === id)
  }

  @Mutation(() => Book)
  async addBook(@Arg('book') bookInput: BookInput): Promise<Book> {
    const book: Book = {
      id: Books.books.length,
      name: bookInput.name,
      authorId: bookInput.authorId
    }
    Books.books.push(book)
    return Promise.resolve(book)
  }
}
