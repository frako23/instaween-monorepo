interface SeedPost {
  description: string;
  images: string[];
}

interface SeedData {
  post: SeedPost[];
}

export const initialData: SeedData = {
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
