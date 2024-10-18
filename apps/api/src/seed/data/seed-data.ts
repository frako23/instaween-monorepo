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
      images: ['images.jpg'],
    },
    {
      description: 'Siempre Persevera',
      images: ['descarga.jpg'],
    },
    {
      description: 'Work hard pays off',
      images: [
        'depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg',
      ],
    },
  ],
};
