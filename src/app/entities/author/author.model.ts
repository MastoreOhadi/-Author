export interface IAuthor {
  id:number,
  name:string,
  imageUrl: string,
  totalPosts: number,
  totalComments: number,
}


export class Author  implements  IAuthor{
  constructor(author:IAuthor) {
    this.id=author.id;
    this.name=author.name;
    this.imageUrl=author.imageUrl;
    this.totalPosts=author.totalPosts;
    this.totalComments=author.totalPosts;
    // Object.assign(this, props);

  }
  id: number;
  name: string;
  imageUrl: string;
  totalPosts: number;
  totalComments: number;
}

export enum AuthorSortType  {
  Name = 'name',
  totalPosts = 'total-posts',
  totalComments = 'total-comments',
}
