export const products = [
  {
    id: 'laptop-1',
    name: 'UltraBook X15',
    brand: 'NovaTech',
    category: 'Laptop',
    price: 1299,
    oldPrice: 1499,
    rating: 4.7,
    stock: 8,
    thumbnail:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['New', 'Sale'],
    description:
      'Slim 15-inch ultrabook with 12th‑gen Intel processor, 16GB RAM, 1TB SSD, and a vibrant 120Hz display — perfect for work and light gaming.',
  },
  {
    id: 'phone-1',
    name: 'PixelView Pro 7',
    brand: 'PixelView',
    category: 'Phone',
    price: 899,
    rating: 4.6,
    stock: 15,
    thumbnail:
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['Best Seller'],
    description:
      'Flagship smartphone with a triple‑camera system, smooth 120Hz OLED, and all‑day battery life with super‑fast charging.',
  },
  {
    id: 'headphones-1',
    name: 'AeroSound ANC 700',
    brand: 'AeroSound',
    category: 'Headphones',
    price: 249,
    oldPrice: 299,
    rating: 4.5,
    stock: 20,
    thumbnail:
      'https://images.pexels.com/photos/3394667/pexels-photo-3394667.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3394667/pexels-photo-3394667.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['Sale'],
    description:
      'Wireless over‑ear headphones with adaptive noise cancelling, 30‑hour battery life, and rich, balanced sound.',
  },
  {
    id: 'accessory-1',
    name: 'ProDock USB‑C Hub',
    brand: 'Dockly',
    category: 'Accessory',
    price: 89,
    rating: 4.3,
    stock: 35,
    thumbnail:
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Versatile USB‑C hub with HDMI, USB‑A, SD card, and Ethernet ports — ideal for modern laptops and tablets.',
  },
  {
    id: 'laptop-2',
    name: 'CreatorBook 14 OLED',
    brand: 'NovaTech',
    category: 'Laptop',
    price: 1599,
    rating: 4.8,
    stock: 6,
    thumbnail:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['New'],
    description:
      '14-inch OLED laptop tuned for creators with factory-calibrated color, 32GB RAM, and ultra-fast NVMe storage.',
  },
  {
    id: 'phone-2',
    name: 'GalaxyEdge S Ultra',
    brand: 'GalaxyEdge',
    category: 'Phone',
    price: 1099,
    rating: 4.5,
    stock: 10,
    thumbnail:
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['Featured'],
    description:
      'Big-screen flagship phone with periscope zoom, stylus support, and a massive 5000mAh battery.',
  },
  {
    id: 'headphones-2',
    name: 'StudioBuds True Wireless',
    brand: 'AeroSound',
    category: 'Headphones',
    price: 149,
    rating: 4.2,
    stock: 40,
    thumbnail:
      'https://images.pexels.com/photos/7123993/pexels-photo-7123993.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7123993/pexels-photo-7123993.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Compact true wireless earbuds with ANC, wireless charging case, and IPX4 sweat resistance.',
  },
  {
    id: 'accessory-2',
    name: 'VisionCurve 27” 2K Monitor',
    brand: 'ViewPlus',
    category: 'Accessory',
    price: 329,
    rating: 4.4,
    stock: 18,
    thumbnail:
      'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['Sale'],
    description:
      '27-inch curved 2K monitor with 165Hz refresh rate and ultra-thin bezels, ideal for gaming and productivity.',
  },
  
  {
    id: 'laptop-4',
    name: 'OfficeMate 13 Air',
    brand: 'NovaTech',
    category: 'Laptop',
    price: 899,
    rating: 4.1,
    stock: 25,
    thumbnail:
      'https://images.pexels.com/photos/1181464/pexels-photo-1181464.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1181464/pexels-photo-1181464.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Lightweight 13-inch laptop designed for students and professionals with long battery life.',
  },
  {
    id: 'phone-3',
    name: 'LiteOne 5G',
    brand: 'LiteOne',
    category: 'Phone',
    price: 399,
    rating: 4.0,
    stock: 50,
    thumbnail:
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8769/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['Budget'],
    description:
      'Affordable 5G smartphone with large display, dual camera, and clean Android experience.',
  },
  {
    id: 'phone-4',
    name: 'PhotoMax Z Pro',
    brand: 'PhotoMax',
    category: 'Phone',
    price: 749,
    rating: 4.3,
    stock: 22,
    thumbnail:
      'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/905197/pexels-photo-905197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Camera-focused smartphone with large sensor and advanced night mode for photography lovers.',
  },
 
  {
    id: 'headphones-4',
    name: 'OfficeTalk Pro',
    brand: 'CallMate',
    category: 'Headphones',
    price: 129,
    rating: 4.2,
    stock: 30,
    thumbnail:
      'https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Wireless headset with boom mic and noise suppression for clear calls and meetings.',
  },
  
  {
    id: 'accessory-4',
    name: 'RGB Mechanical Keyboard TKL',
    brand: 'KeyWorks',
    category: 'Accessory',
    price: 119,
    rating: 4.5,
    stock: 27,
    thumbnail:
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    badges: ['Gaming'],
    description:
      'Tenkeyless mechanical keyboard with RGB backlighting and hot-swappable switches.',
  },
  {
    id: 'accessory-5',
    name: '4K Webcam StreamPro',
    brand: 'StreamPro',
    category: 'Accessory',
    price: 179,
    rating: 4.3,
    stock: 19,
    thumbnail:
      'https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6898852/pexels-photo-6898852.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      '4K streaming webcam with dual microphones, auto-focus, and adjustable stand.',
  },
]

