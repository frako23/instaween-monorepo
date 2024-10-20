import * as bcrypt from 'bcrypt';

interface SeedPost {
  description: string;
  images: string[];
}

interface SeedUsers {
  email: string;
  fullName: string;
  password: string;
  roles: string[];
}

interface SeedData {
  users: SeedUsers[];
  post: SeedPost[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'test1@gmail.com',
      fullName: 'Test One',
      password: bcrypt.hashSync('Lorman4520', 10),
      roles: ['user', 'admin'],
    },
    {
      email: 'test2@gmail.com',
      fullName: 'Test Two',
      password: bcrypt.hashSync('Lorman4520', 10),
      roles: ['user', 'admin'],
    },
    {
      email: 'test3@gmail.com',
      fullName: 'Test Three',
      password: bcrypt.hashSync('Lorman4520', 10),
      roles: ['user', 'admin'],
    },
  ],

  post: [
    {
      description: 'Buenas vibras',
      images: ['1728938094490.jpg'],
    },
    {
      description: 'Siempre Persevera',
      images: ['images.png'],
    },
    {
      description: 'Work hard pays off',
      images: [
        'depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
      ],
    },
  ],
};
