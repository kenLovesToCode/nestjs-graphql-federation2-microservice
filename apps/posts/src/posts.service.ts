import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
// import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [
    { id: '001', authorId: '001', body: 'First Post' },
    { id: '002', authorId: '002', body: 'Second Post' },
    { id: '003', authorId: '001', body: 'Third Post' }
  ];

  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find(post => post.id === id);
  }

  forAuthor(authorId: string) {
    return this.posts.filter(post => post.authorId === authorId);
  }
  // update(id: number, updatePostInput: UpdatePostInput) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
