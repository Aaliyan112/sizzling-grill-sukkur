import { MenuItem, GalleryItem, SizzlingCategory } from '../types';

export const RESTAURANT_INFO = {
  name: 'SIZZLING GRILL',
  tagline: 'Where Every Bite Brings the Heat.',
  subtitle: 'Experience the perfect blend of flavour, freshness and unforgettable dining in Sukkur.',
  address: 'Military Road, Basheerabad, Sukkur, Sindh, Pakistan',
  phone: '+92 309 7807000',
  phoneDisplay: '0309 7807000',
  whatsappUrl: 'https://wa.me/923097807000',
  instagramUrl: 'https://www.instagram.com/sizzlinggrill.sukkur/',
  instagramHandle: '@sizzlinggrill.sukkur',
  openingHours: '12:00 PM – 02:00 AM (Monday to Sunday)',
  halalCertified: '100% Halal Certified Meats',
};

export const MENU_CATEGORIES: SizzlingCategory[] = [
  'Appetizers',
  'Soups',
  'Salads',
  'Chicken Karahi',
  'Mutton Karahi',
  'Chicken Handi',
  'Mutton Handi',
  'Pakistani Specials',
  'Biryani Specials',
  'Mutton Dishes',
  'Chicken Specials',
  'BBQ',
  'Chinese Gravy With Rice',
  'Chinese Gravy Without Rice',
  'Rice',
  'Chowmein',
  'Pasta',
  'Tandoor',
  'Cold Beverages',
  'Desserts',
  'Tea & Hot Coffee',
  'Smoothies',
  'Frappe',
  'Ice Tea',
  'Shakes',
  'Slush Drinks',
  'Zesty Zips Lemonade',
  'Colada',
  'Margarita',
  'Mojito',
  'Scoop Ice Cream',
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Appetizers
  {
    id: 'app-1',
    name: 'Finger Fish with Tartar Sauce',
    category: 'Appetizers',
    description: 'Crispy golden fried river fish fingers seasoned with oriental spices, served with fresh house-made tartar sauce.',
    portions: [{ label: 'Standard', price: 950 }],
    isSpecialty: true,
  },
  {
    id: 'app-2',
    name: 'Dynamite Chicken Bites',
    category: 'Appetizers',
    description: 'Crisp chicken poppers tossed in our fiery house dynamite sauce, topped with spring onions and toasted sesame.',
    portions: [{ label: 'Standard', price: 650 }],
    isSpicy: true,
    isSpecialty: true,
  },
  {
    id: 'app-3',
    name: 'Honey Mustard Chicken Wings',
    category: 'Appetizers',
    description: '6 pieces of golden wings glazed in a rich honey mustard emulsion with a touch of crushed chilli flakes.',
    portions: [{ label: 'Standard', price: 580 }],
  },
  {
    id: 'app-4',
    name: 'Spicy Buffalo Wings',
    category: 'Appetizers',
    description: 'Tossed in hot tangy buffalo sauce served with cool ranch dip and pickled cucumber strips.',
    portions: [{ label: 'Standard', price: 620 }],
    isSpicy: true,
  },
  {
    id: 'app-5',
    name: 'Sizzling Loaded Fries',
    category: 'Appetizers',
    description: 'Crisp cut fries loaded with melted cheese sauce, spiced minced chicken, jalapeños, and smoky barbecue mayo.',
    portions: [{ label: 'Standard', price: 480 }],
    isVegetarian: false,
  },
  {
    id: 'app-6',
    name: 'Toasted Garlic Bread (4 Pcs)',
    category: 'Appetizers',
    description: 'Crusty bread brushed with roasted garlic butter, parsley, and optional melted mozzarella.',
    portions: [{ label: 'Standard', price: 320 }],
    isVegetarian: true,
  },

  // 2. Soups
  {
    id: 'sp-1',
    name: 'Sizzling Special Soup',
    category: 'Soups',
    description: 'Chef signature thick soup loaded with chicken, prawns, black mushrooms, egg ribbons, and secret aromatics.',
    portions: [
      { label: 'Single', price: 420 },
      { label: 'Double', price: 780 },
    ],
    isSpecialty: true,
  },
  {
    id: 'sp-2',
    name: 'Chicken Hot & Sour Soup',
    category: 'Soups',
    description: 'Classic tangy and spicy red broth with shredded chicken, carrots, cabbage, and egg drops.',
    portions: [
      { label: 'Single', price: 340 },
      { label: 'Double', price: 620 },
    ],
    isSpicy: true,
  },
  {
    id: 'sp-3',
    name: 'Chicken Corn Soup',
    category: 'Soups',
    description: 'Mild sweet corn broth with tender chicken strips and whipped egg, comforting and warm.',
    portions: [
      { label: 'Single', price: 320 },
      { label: 'Double', price: 590 },
    ],
  },
  {
    id: 'sp-4',
    name: '19B Special Soup',
    category: 'Soups',
    description: 'Rich dark Chinese soup featuring chicken, mushrooms, and subtle ginger notes.',
    portions: [
      { label: 'Single', price: 380 },
      { label: 'Double', price: 690 },
    ],
  },

  // 3. Salads
  {
    id: 'sld-1',
    name: 'Sizzling Russian Salad',
    category: 'Salads',
    description: 'Diced potatoes, green apples, peas, and pineapple tossed in sweet velvety mayonnaise with cracked pepper.',
    portions: [{ label: 'Standard', price: 380 }],
    isVegetarian: true,
  },
  {
    id: 'sld-2',
    name: 'Fresh Kachumber Salad',
    category: 'Salads',
    description: 'Finely chopped cucumbers, onions, tomatoes, green chillies with fresh lemon juice and cumin seasoning.',
    portions: [{ label: 'Standard', price: 180 }],
    isVegetarian: true,
  },
  {
    id: 'sld-3',
    name: 'Garden Green Salad',
    category: 'Salads',
    description: 'Crisp lettuce leaves, sliced carrots, radishes, cucumbers, and tomatoes with lemon wedges.',
    portions: [{ label: 'Standard', price: 150 }],
    isVegetarian: true,
  },

  // 4. Chicken Karahi
  {
    id: 'ck-1',
    name: 'Chicken Shinwari Karahi',
    category: 'Chicken Karahi',
    description: 'Tribal Frontier style prepared in pure animal fat or desi ghee, fresh tomatoes, coarse green chillies, and ginger. No heavy spices.',
    portions: [
      { label: 'Half', price: 950 },
      { label: 'Full', price: 1750 },
    ],
    image: '/images/signature_chicken_karahi.jpg',
    isSpecialty: true,
  },
  {
    id: 'ck-2',
    name: 'Chicken Red Karahi (Special)',
    category: 'Chicken Karahi',
    description: 'Cooked over high flame in an iron wok with vine-ripened tomatoes, crushed coriander, black pepper, and butter.',
    portions: [
      { label: 'Half', price: 890 },
      { label: 'Full', price: 1650 },
    ],
    isSpecialty: true,
  },
  {
    id: 'ck-3',
    name: 'Chicken White Karahi',
    category: 'Chicken Karahi',
    description: 'Tender chicken cooked in rich yoghurt, fresh cream, white pepper, cumin, and green chillies without tomatoes.',
    portions: [
      { label: 'Half', price: 980 },
      { label: 'Full', price: 1790 },
    ],
  },
  {
    id: 'ck-4',
    name: 'Chicken Peshawari Karahi',
    category: 'Chicken Karahi',
    description: 'Peshawar highway style karahi cooked with whole cloves of garlic, ripe tomatoes, black pepper, and sizzling butter.',
    portions: [
      { label: 'Half', price: 920 },
      { label: 'Full', price: 1690 },
    ],
  },
  {
    id: 'ck-5',
    name: 'Chicken Green Karahi',
    category: 'Chicken Karahi',
    description: 'Herbaceous green gravy made from fresh coriander, green chillies, mint, and yoghurt.',
    portions: [
      { label: 'Half', price: 920 },
      { label: 'Full', price: 1690 },
    ],
    isSpicy: true,
  },

  // 5. Mutton Karahi
  {
    id: 'mk-1',
    name: 'Mutton Shinwari Karahi',
    category: 'Mutton Karahi',
    description: 'Prime fresh goat meat cooked in its own natural juices with salt, whole tomatoes, and slit green chillies.',
    portions: [
      { label: 'Half', price: 1650 },
      { label: 'Full', price: 3100 },
    ],
    isSpecialty: true,
  },
  {
    id: 'mk-2',
    name: 'Mutton Red Karahi',
    category: 'Mutton Karahi',
    description: 'Tender mutton cooked in traditional iron wok with rich tomato gravy, cracked coriander, and ginger batons.',
    portions: [
      { label: 'Half', price: 1550 },
      { label: 'Full', price: 2950 },
    ],
  },
  {
    id: 'mk-3',
    name: 'Mutton White Karahi',
    category: 'Mutton Karahi',
    description: 'Slow-simmered tender mutton in thick cream, hung curd, and roasted white cumin.',
    portions: [
      { label: 'Half', price: 1700 },
      { label: 'Full', price: 3200 },
    ],
  },
  {
    id: 'mk-4',
    name: 'Mutton Peshawari Karahi',
    category: 'Mutton Karahi',
    description: 'Authentic Peshawari preparation with whole black pepper and fresh green chillies in animal fat.',
    portions: [
      { label: 'Half', price: 1600 },
      { label: 'Full', price: 3050 },
    ],
  },

  // 6. Chicken Handi
  {
    id: 'ch-1',
    name: 'Chicken Makhni Handi (Boneless)',
    category: 'Chicken Handi',
    description: 'Boneless chicken cubes slow-cooked in a glazed clay handi with rich buttery tomato gravy, cream, and dry fenugreek.',
    portions: [
      { label: 'Half', price: 980 },
      { label: 'Full', price: 1850 },
    ],
    isSpecialty: true,
  },
  {
    id: 'ch-2',
    name: 'Chicken Mughlai Handi',
    category: 'Chicken Handi',
    description: 'Royal boneless chicken in a creamy almond and cashew nut based gravy infused with saffron water and egg ribbons.',
    portions: [
      { label: 'Half', price: 1050 },
      { label: 'Full', price: 1950 },
    ],
  },
  {
    id: 'ch-3',
    name: 'Chicken Achari Handi',
    category: 'Chicken Handi',
    description: 'Tangy spiced chicken prepared with traditional pickling spices: fennel, mustard seeds, and kalonji.',
    portions: [
      { label: 'Half', price: 920 },
      { label: 'Full', price: 1750 },
    ],
    isSpicy: true,
  },
  {
    id: 'ch-4',
    name: 'Chicken Madhuban Handi',
    category: 'Chicken Handi',
    description: 'Sizzling Grill house specialty handi with diced capsicum, onions, and mild spiced silky sauce.',
    portions: [
      { label: 'Half', price: 980 },
      { label: 'Full', price: 1850 },
    ],
  },

  // 7. Mutton Handi
  {
    id: 'mh-1',
    name: 'Mutton Makhni Handi',
    category: 'Mutton Handi',
    description: 'Boneless tender mutton simmered in a handi with butter, tomatoes, cream, and roasted garam masala.',
    portions: [
      { label: 'Half', price: 1750 },
      { label: 'Full', price: 3300 },
    ],
    image: '/images/dish_mutton_handi.jpg',
    isSpecialty: true,
  },
  {
    id: 'mh-2',
    name: 'Mutton Mughlai Handi',
    category: 'Mutton Handi',
    description: 'Royal preparation of boneless mutton in rich gravy of clotted cream, nuts, and delicate spices.',
    portions: [
      { label: 'Half', price: 1850 },
      { label: 'Full', price: 3450 },
    ],
  },
  {
    id: 'mh-3',
    name: 'Mutton Madhuban Handi',
    category: 'Mutton Handi',
    description: 'House specialty mutton prepared with roasted cumin, bell peppers, and slow-reduced broth.',
    portions: [
      { label: 'Half', price: 1790 },
      { label: 'Full', price: 3350 },
    ],
  },

  // 8. Pakistani Specials
  {
    id: 'pk-1',
    name: 'Sizzling Mutton Brain Masala',
    category: 'Pakistani Specials',
    description: 'Fresh sheep brain tempered on flat tawa with tomatoes, green chillies, ginger, and aromatic spices.',
    portions: [{ label: 'Standard', price: 950 }],
    isSpecialty: true,
  },
  {
    id: 'pk-2',
    name: 'Mutton Chops Masala (4 Pcs)',
    category: 'Pakistani Specials',
    description: 'Pan-seared tender mutton cutlets cooked in thick onion-tomato bhuna masala.',
    portions: [{ label: 'Standard', price: 1450 }],
  },
  {
    id: 'pk-3',
    name: 'Chicken Ginger Boneless',
    category: 'Pakistani Specials',
    description: 'Stir-fried boneless chicken slivers with julienned ginger, black pepper, and lemon gravy.',
    portions: [{ label: 'Standard', price: 880 }],
  },
  {
    id: 'pk-4',
    name: 'Chicken Jalfrezi Desi Style',
    category: 'Pakistani Specials',
    description: 'Tender chicken with sautéed bell peppers, onions, tomatoes, and egg in tangy spiced gravy.',
    portions: [{ label: 'Standard', price: 850 }],
  },

  // 9. Biryani Specials
  {
    id: 'by-1',
    name: 'Sizzling Special Chicken Biryani',
    category: 'Biryani Specials',
    description: 'Aged long-grain basmati rice layered with spicy marinated chicken, potatoes, prunes, and saffron aroma.',
    portions: [
      { label: 'Single', price: 420 },
      { label: 'Double', price: 790 },
    ],
    isSpecialty: true,
  },
  {
    id: 'by-2',
    name: 'Special Mutton Dum Biryani',
    category: 'Biryani Specials',
    description: 'Succulent mutton slow-steamed in sealed pot with fragrant basmati, fried onions, and kewra water.',
    portions: [
      { label: 'Single', price: 680 },
      { label: 'Double', price: 1290 },
    ],
    isSpecialty: true,
  },
  {
    id: 'by-3',
    name: 'Sizzling Pulao (Signature)',
    category: 'Biryani Specials',
    description: 'Famous Sukkur style sizzling rice platter served on a smoking hot iron plate with kebabs and spicy stock gravy.',
    portions: [
      { label: 'Single', price: 550 },
      { label: 'Double', price: 980 },
    ],
    isSpecialty: true,
  },

  // 10. Mutton Dishes
  {
    id: 'md-1',
    name: 'Mutton Kunna (Chinioti Style)',
    category: 'Mutton Dishes',
    description: 'Clay-pot slow-cooked mutton in dense rich gravy with whole spices and bone essence.',
    portions: [{ label: 'Standard', price: 1350 }],
    isSpecialty: true,
  },
  {
    id: 'md-2',
    name: 'Mutton Roghan Josh',
    category: 'Mutton Dishes',
    description: 'Kashmiri style aromatic mutton curry coloured with natural Kashmiri chilli and infused with fennel and dry ginger.',
    portions: [{ label: 'Standard', price: 1250 }],
  },
  {
    id: 'md-3',
    name: 'Mutton Special Nihari',
    category: 'Mutton Dishes',
    description: 'Overnight simmered shank broth infused with potli spices, served with fresh lemon, ginger, and green chillies.',
    portions: [{ label: 'Standard', price: 1150 }],
  },

  // 11. Chicken Specials
  {
    id: 'cs-1',
    name: 'Sizzling Chicken Steak with Fries',
    category: 'Chicken Specials',
    description: 'Grilled chicken breast served on a smoking hot iron skillet with sautéed vegetables, French fries, and choice of mushroom or black pepper sauce.',
    portions: [{ label: 'Standard', price: 990 }],
    isSpecialty: true,
  },
  {
    id: 'cs-2',
    name: 'Chicken Shashlik on Sizzler',
    category: 'Chicken Specials',
    description: 'Skewered chicken cubes, capsicum, and onions glazed in sweet & sour sauce served over garlic rice.',
    portions: [{ label: 'Standard', price: 890 }],
  },
  {
    id: 'cs-3',
    name: 'Chicken Manchurian Sizzling',
    category: 'Chicken Specials',
    description: 'Crispy fried chicken balls in tangy red garlic sauce served sizzling with egg fried rice.',
    portions: [{ label: 'Standard', price: 880 }],
  },

  // 12. BBQ
  {
    id: 'bbq-1',
    name: 'Sizzling Mixed BBQ Platter',
    category: 'BBQ',
    description: 'Includes 1 Chicken Tikka, 4 Malai Boti, 4 Chicken Seekh Kebabs, 4 Beef Bihari Boti, served sizzling on hot onions with mint raita and imli chutney.',
    portions: [
      { label: 'Half', price: 1750 },
      { label: 'Full', price: 3200 },
    ],
    image: '/images/hero_sizzling_bbq.jpg',
    isSpecialty: true,
  },
  {
    id: 'bbq-2',
    name: 'Chicken Malai Boti (8 Pcs)',
    category: 'BBQ',
    description: 'Melt-in-mouth chicken boneless marinated in fresh cream, cheese, green chillies, and mild white spices, char-grilled over acacia coal.',
    portions: [{ label: 'Standard', price: 780 }],
    isSpecialty: true,
  },
  {
    id: 'bbq-3',
    name: 'Chicken Tikka (Chest / Leg)',
    category: 'BBQ',
    description: 'Traditional quarter chicken marinated in spicy red yoghurt masala, roasted over glowing charcoal.',
    portions: [{ label: 'Standard', price: 380 }],
    isSpicy: true,
  },
  {
    id: 'bbq-4',
    name: 'Chicken Reshmi Kebab (4 Pcs)',
    category: 'BBQ',
    description: 'Minced chicken with crushed ginger, coriander, and cream, roasted to golden perfection on skewers.',
    portions: [{ label: 'Standard', price: 650 }],
  },
  {
    id: 'bbq-5',
    name: 'Beef Seekh Kebab (4 Pcs)',
    category: 'BBQ',
    description: 'Spiced minced beef skewers with roasted onion, cumin, and coriander roasted over live fire.',
    portions: [{ label: 'Standard', price: 690 }],
  },
  {
    id: 'bbq-6',
    name: 'Beef Bihari Boti',
    category: 'BBQ',
    description: 'Thin beef fillets tenderized with raw papaya and mustard oil, charred to smoky perfection.',
    portions: [{ label: 'Standard', price: 780 }],
    isSpicy: true,
  },
  {
    id: 'bbq-7',
    name: 'Fish Tikka (Boneless)',
    category: 'BBQ',
    description: 'River fish cubes marinated in ajwain, lemon juice, and red masala, grilled on skewers.',
    portions: [{ label: 'Standard', price: 950 }],
  },

  // 13. Chinese Gravy With Rice
  {
    id: 'cgr-1',
    name: 'Chicken Manchurian with Egg Fried Rice',
    category: 'Chinese Gravy With Rice',
    description: 'Classic red sweet and spicy tomato-garlic gravy served with fluffy egg fried rice.',
    portions: [{ label: 'Standard', price: 790 }],
  },
  {
    id: 'cgr-2',
    name: 'Chicken Shashlik with Garlic Rice',
    category: 'Chinese Gravy With Rice',
    description: 'Glazed chicken, onion, and bell pepper skewers in sweet tangy sauce served with aromatic garlic butter rice.',
    portions: [{ label: 'Standard', price: 820 }],
  },
  {
    id: 'cgr-3',
    name: 'Szechuan Chicken with Fried Rice',
    category: 'Chinese Gravy With Rice',
    description: 'Spicy wok-tossed chicken with red chillies, vinegar, and garlic alongside egg rice.',
    portions: [{ label: 'Standard', price: 820 }],
    isSpicy: true,
  },
  {
    id: 'cgr-4',
    name: 'Black Pepper Chicken with Rice',
    category: 'Chinese Gravy With Rice',
    description: 'Sliced chicken and onions in savory crushed black pepper oyster sauce with rice.',
    portions: [{ label: 'Standard', price: 820 }],
  },

  // 14. Chinese Gravy Without Rice
  {
    id: 'cg-1',
    name: 'Chicken Manchurian Gravy',
    category: 'Chinese Gravy Without Rice',
    description: 'Full bowl of red chicken manchurian gravy for sharing.',
    portions: [{ label: 'Standard', price: 680 }],
  },
  {
    id: 'cg-2',
    name: 'Szechuan Chicken Gravy',
    category: 'Chinese Gravy Without Rice',
    description: 'Fiery Chinese gravy with bell peppers and chicken slices.',
    portions: [{ label: 'Standard', price: 720 }],
    isSpicy: true,
  },
  {
    id: 'cg-3',
    name: 'Sweet & Sour Chicken',
    category: 'Chinese Gravy Without Rice',
    description: 'Pineapple, capsicum, and chicken in glossy sweet & sour sauce.',
    portions: [{ label: 'Standard', price: 690 }],
  },

  // 15. Rice
  {
    id: 'rc-1',
    name: 'Chicken Fried Rice',
    category: 'Rice',
    description: 'Wok-tossed basmati rice with shredded chicken, eggs, and julienned vegetables.',
    portions: [{ label: 'Standard', price: 480 }],
  },
  {
    id: 'rc-2',
    name: 'Egg Fried Rice',
    category: 'Rice',
    description: 'Classic wok-fried rice with scrambled eggs, scallions, and soy seasoning.',
    portions: [{ label: 'Standard', price: 380 }],
    isVegetarian: true,
  },
  {
    id: 'rc-3',
    name: 'Vegetable Fried Rice',
    category: 'Rice',
    description: 'Fluffy rice stir-fried with carrots, cabbage, and peas.',
    portions: [{ label: 'Standard', price: 350 }],
    isVegetarian: true,
  },
  {
    id: 'rc-4',
    name: 'Garlic Butter Rice',
    category: 'Rice',
    description: 'Steamed basmati infused with browned garlic butter.',
    portions: [{ label: 'Standard', price: 360 }],
    isVegetarian: true,
  },

  // 16. Chowmein
  {
    id: 'cm-1',
    name: 'Sizzling Special Chowmein',
    category: 'Chowmein',
    description: 'Handmade noodles stir-fried with chicken, prawns, crunchy seasonal vegetables, and rich house sauce.',
    portions: [{ label: 'Standard', price: 550 }],
    isSpecialty: true,
  },
  {
    id: 'cm-2',
    name: 'Chicken Chowmein',
    category: 'Chowmein',
    description: 'Popular Sukkur favorite with tender chicken strips, cabbage, carrots, and spring onions.',
    portions: [{ label: 'Standard', price: 400 }],
  },
  {
    id: 'cm-3',
    name: 'Vegetable Chowmein',
    category: 'Chowmein',
    description: 'Stir-fried noodles with crisp vegetables and savory soy sauce.',
    portions: [{ label: 'Standard', price: 340 }],
    isVegetarian: true,
  },

  // 17. Pasta
  {
    id: 'pst-1',
    name: 'Fettuccine Alfredo with Grilled Chicken',
    category: 'Pasta',
    description: 'Ribbon pasta tossed in rich parmesan cream sauce, topped with seasoned grilled chicken breast slices.',
    portions: [{ label: 'Standard', price: 790 }],
    isSpecialty: true,
  },
  {
    id: 'pst-2',
    name: 'Penne Arrabbiata (Spicy)',
    category: 'Pasta',
    description: 'Penne tossed in spicy garlic tomato sauce, black olives, and fresh basil.',
    portions: [{ label: 'Standard', price: 650 }],
    isVegetarian: true,
    isSpicy: true,
  },
  {
    id: 'pst-3',
    name: 'Creamy Chicken & Mushroom Pasta',
    category: 'Pasta',
    description: 'Penne with sautéed button mushrooms, chicken, and herb cream sauce.',
    portions: [{ label: 'Standard', price: 750 }],
  },

  // 18. Tandoor
  {
    id: 'td-1',
    name: 'Roghani Naan',
    category: 'Tandoor',
    description: 'Clay tandoor baked bread brushed with butter and sesame seeds.',
    portions: [{ label: 'Standard', price: 80 }],
    isVegetarian: true,
  },
  {
    id: 'td-2',
    name: 'Garlic Butter Naan',
    category: 'Tandoor',
    description: 'Infused with chopped garlic, fresh coriander, and melted butter.',
    portions: [{ label: 'Standard', price: 110 }],
    isVegetarian: true,
  },
  {
    id: 'td-3',
    name: 'Cheese Naan',
    category: 'Tandoor',
    description: 'Stuffed with mozzarella and cheddar cheese, baked to golden crispness.',
    portions: [{ label: 'Standard', price: 280 }],
    isVegetarian: true,
  },
  {
    id: 'td-4',
    name: 'Kalonji Naan',
    category: 'Tandoor',
    description: 'Traditional flatbread topped with black nigella seeds.',
    portions: [{ label: 'Standard', price: 70 }],
    isVegetarian: true,
  },
  {
    id: 'td-5',
    name: 'Plain Tandoori Roti',
    category: 'Tandoor',
    description: 'Whole wheat flour flatbread freshly baked in clay oven.',
    portions: [{ label: 'Standard', price: 30 }],
    isVegetarian: true,
  },

  // 19. Cold Beverages
  {
    id: 'bev-1',
    name: 'Mineral Water',
    category: 'Cold Beverages',
    description: 'Sealed purified drinking water.',
    portions: [
      { label: 'Regular', price: 70 },
      { label: 'Large', price: 120 },
    ],
  },
  {
    id: 'bev-2',
    name: 'Soft Drinks Can (330ml)',
    category: 'Cold Beverages',
    description: 'Coke, Sprite, Fanta, Pakola, or Diet Coke.',
    portions: [{ label: 'Regular', price: 120 }],
  },
  {
    id: 'bev-3',
    name: 'Fresh Lime 7Up',
    category: 'Cold Beverages',
    description: 'Chilled lemon soda with fresh squeezed lime juice and rock salt.',
    portions: [{ label: 'Regular', price: 180 }],
  },

  // 20. Desserts
  {
    id: 'dst-1',
    name: 'Sizzling Hot Brownie with Vanilla Ice Cream',
    category: 'Desserts',
    description: 'Warm fudge brownie served on a sizzling hot plate with vanilla ice cream and melted chocolate sauce sizzle.',
    portions: [{ label: 'Standard', price: 490 }],
    isSpecialty: true,
  },
  {
    id: 'dst-2',
    name: 'Molten Lava Cake',
    category: 'Desserts',
    description: 'Gooey chocolate center cake served with a scoop of premium vanilla ice cream.',
    portions: [{ label: 'Standard', price: 520 }],
    isSpecialty: true,
  },
  {
    id: 'dst-3',
    name: 'Shahi Kheer',
    category: 'Desserts',
    description: 'Traditional slow-cooked rice pudding infused with saffron, cardamom, and sliced almonds.',
    portions: [{ label: 'Standard', price: 260 }],
    isVegetarian: true,
  },
  {
    id: 'dst-4',
    name: 'Hot Gulab Jamun (2 Pcs)',
    category: 'Desserts',
    description: 'Classic sweet milk dough balls steeped in fragrant rose-cardamom sugar syrup.',
    portions: [{ label: 'Standard', price: 220 }],
    isVegetarian: true,
  },

  // 21. Tea & Hot Coffee
  {
    id: 'tea-1',
    name: 'Special Karak Doodh Patti Chai',
    category: 'Tea & Hot Coffee',
    description: 'Strong, creamy Pakistani tea brewed with cardamom and condensed milk.',
    portions: [{ label: 'Standard', price: 120 }],
    isSpecialty: true,
  },
  {
    id: 'tea-2',
    name: 'Peshawari Green Tea / Kahwa',
    category: 'Tea & Hot Coffee',
    description: 'Light green tea with green cardamom, lemon twist, and optional sugar crystal.',
    portions: [{ label: 'Standard', price: 80 }],
  },
  {
    id: 'tea-3',
    name: 'Cappuccino / Hot Latte',
    category: 'Tea & Hot Coffee',
    description: 'Espresso shot with steamed velvety milk foam and dusted cocoa.',
    portions: [{ label: 'Standard', price: 320 }],
  },

  // 22. Smoothies
  {
    id: 'sm-1',
    name: 'Strawberry Smoothie',
    category: 'Smoothies',
    description: 'Real strawberry purée blended with rich yoghurt, milk, and crushed ice.',
    portions: [{ label: 'Standard', price: 380 }],
  },
  {
    id: 'sm-2',
    name: 'Mango Smoothie (Seasonal)',
    category: 'Smoothies',
    description: 'Thick creamy Sindhri mango smoothie.',
    portions: [{ label: 'Standard', price: 390 }],
  },
  {
    id: 'sm-3',
    name: 'Wild Berry Blast',
    category: 'Smoothies',
    description: 'Blackberry, blueberry, and strawberry blend.',
    portions: [{ label: 'Standard', price: 420 }],
  },

  // 23. Frappe
  {
    id: 'frp-1',
    name: 'Caramel Coffee Frappe',
    category: 'Frappe',
    description: 'Blended iced coffee with rich buttery caramel drizzle and whipped cream.',
    portions: [{ label: 'Standard', price: 420 }],
    isSpecialty: true,
  },
  {
    id: 'frp-2',
    name: 'Mocha Chocolate Frappe',
    category: 'Frappe',
    description: 'Double espresso blended with chocolate syrup and milk foam.',
    portions: [{ label: 'Standard', price: 420 }],
  },

  // 24. Ice Tea
  {
    id: 'it-1',
    name: 'Peach Iced Tea',
    category: 'Ice Tea',
    description: 'Brewed black tea infused with sweet peach nectar and lemon wheel over ice.',
    portions: [{ label: 'Standard', price: 290 }],
  },
  {
    id: 'it-2',
    name: 'Lemon Mint Iced Tea',
    category: 'Ice Tea',
    description: 'Crisp and refreshing iced tea with mint leaves and fresh lemon.',
    portions: [{ label: 'Standard', price: 280 }],
  },

  // 25. Shakes
  {
    id: 'shk-1',
    name: 'Oreo Thick Shake',
    category: 'Shakes',
    description: 'Crunchy crushed Oreo cookies blended with chocolate ice cream and whole milk.',
    portions: [{ label: 'Standard', price: 380 }],
    isSpecialty: true,
  },
  {
    id: 'shk-2',
    name: 'KitKat Chocolate Shake',
    category: 'Shakes',
    description: 'Crispy KitKat wafer bars blended into dense chocolate shake with whipped topping.',
    portions: [{ label: 'Standard', price: 410 }],
  },
  {
    id: 'shk-3',
    name: 'Mango Thick Shake',
    category: 'Shakes',
    description: 'Rich mango pulp blended with vanilla ice cream.',
    portions: [{ label: 'Standard', price: 360 }],
  },

  // 26. Slush Drinks
  {
    id: 'sls-1',
    name: 'Electric Blue Lagoon Slush',
    category: 'Slush Drinks',
    description: 'Vibrant blue curacao syrup with crushed crystal ice and citrus soda.',
    portions: [{ label: 'Standard', price: 280 }],
    isSpecialty: true,
  },
  {
    id: 'sls-2',
    name: 'Green Apple Slush',
    category: 'Slush Drinks',
    description: 'Tart and sweet green apple crushed ice refresher.',
    portions: [{ label: 'Standard', price: 280 }],
  },

  // 27. Zesty Zips Lemonade
  {
    id: 'zz-1',
    name: 'Zesty Mint Lemonade (Signature)',
    category: 'Zesty Zips Lemonade',
    description: 'Fresh mountain mint, crushed ice, freshly squeezed lemons, and black salt splash.',
    portions: [{ label: 'Standard', price: 260 }],
    image: '/images/refreshing_mocktails.jpg',
    isSpecialty: true,
  },
  {
    id: 'zz-2',
    name: 'Electric Blue Lemonade',
    category: 'Zesty Zips Lemonade',
    description: 'Citrus lemonade with blue infusion and fizz.',
    portions: [{ label: 'Standard', price: 290 }],
  },
  {
    id: 'zz-3',
    name: 'Strawberry Zest Lemonade',
    category: 'Zesty Zips Lemonade',
    description: 'Fresh lemon juice muddled with strawberry compote.',
    portions: [{ label: 'Standard', price: 290 }],
  },

  // 28. Colada
  {
    id: 'cld-1',
    name: 'Classic Piña Colada',
    category: 'Colada',
    description: 'Cream of coconut, pineapple juice, and crushed ice blended smooth with a cherry.',
    portions: [{ label: 'Standard', price: 360 }],
    isSpecialty: true,
  },
  {
    id: 'cld-2',
    name: 'Mango Colada',
    category: 'Colada',
    description: 'Tropical mango juice blended with coconut milk and sweet cream.',
    portions: [{ label: 'Standard', price: 380 }],
  },

  // 29. Margarita
  {
    id: 'mrg-1',
    name: 'Fresh Mint Margarita',
    category: 'Margarita',
    description: 'Frosted rim glass with crushed mint, lime juice, rock salt, and sparkling soda.',
    portions: [{ label: 'Standard', price: 310 }],
    isSpecialty: true,
  },
  {
    id: 'mrg-2',
    name: 'Strawberry Margarita',
    category: 'Margarita',
    description: 'Sweet and tart strawberry purée with fresh lime and ice crystal rim.',
    portions: [{ label: 'Standard', price: 340 }],
  },

  // 30. Mojito
  {
    id: 'moj-1',
    name: 'Classic Virgin Mojito',
    category: 'Mojito',
    description: 'Muddled fresh mint leaves, lime wedges, simple syrup, and sparkling soda over crushed ice.',
    portions: [{ label: 'Standard', price: 320 }],
    isSpecialty: true,
  },
  {
    id: 'moj-2',
    name: 'Blueberry Mojito',
    category: 'Mojito',
    description: 'Muddled fresh blueberries with mint, lime, and crisp soda.',
    portions: [{ label: 'Standard', price: 360 }],
  },

  // 31. Scoop Ice Cream
  {
    id: 'ice-1',
    name: 'Premium Scoop Ice Cream',
    category: 'Scoop Ice Cream',
    description: 'Choose your flavors: Rich Vanilla, Belgian Chocolate, Royal Kulfa, Fresh Mango, or Strawberry.',
    portions: [
      { label: 'Single', price: 160 },
      { label: 'Double', price: 290 },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sizzling Mixed BBQ Platter',
    category: 'BBQ & Sizzlers',
    image: '/images/hero_sizzling_bbq.jpg',
    caption: 'Served on smoking cast iron with charred seekh kebabs, malai boti, chicken tikka, and caramelized onions.',
  },
  {
    id: 'gal-2',
    title: 'Chicken Shinwari Karahi Live',
    category: 'Karahi & Handi',
    image: '/images/signature_chicken_karahi.jpg',
    caption: 'Freshly cooked in authentic iron woks over open coal fires on Military Road Sukkur.',
  },
  {
    id: 'gal-3',
    title: 'Mutton Makhni Handi & Roghani Naan',
    category: 'Karahi & Handi',
    image: '/images/dish_mutton_handi.jpg',
    caption: 'Traditional slow-simmered handi in glazed earthen pot paired with piping hot tandoori naan.',
  },
  {
    id: 'gal-4',
    title: 'Sizzling Grill Family Hall',
    category: 'Interior & Dining',
    image: '/images/sizzling_dining_ambience.jpg',
    caption: 'Spacious air-conditioned family hall and dining ambiance on Military Road, Basheerabad.',
  },
  {
    id: 'gal-5',
    title: 'Mint Margarita & Zesty Lemonades',
    category: 'Beverages & Desserts',
    image: '/images/refreshing_mocktails.jpg',
    caption: 'Handcrafted chilled mocktails, smoothies, and zesty refreshments.',
  },
  {
    id: 'gal-6',
    title: 'Sizzling Hot Brownie with Ice Cream',
    category: 'Beverages & Desserts',
    image: '/images/hero_sizzling_bbq.jpg',
    caption: 'Decadent chocolate fudge brownie served sizzling with velvety vanilla scoop.',
  },
];

export const CUSTOMER_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    rating: 5,
    date: 'Verified Dine-in',
    comment: 'Undoubtedly the best BBQ and Chicken Shinwari Karahi on Military Road Sukkur! The sizzling mixed platter arrived smoking hot with delicious aromas. Excellent family atmosphere.',
  },
  {
    id: 'rev-2',
    author: 'Dr. Ayesha Memon',
    rating: 5,
    date: 'Family Dining',
    comment: 'The Mutton Handi is superb and very tender. We celebrated a family birthday here and the staff was courteous. Highly recommend the Mint Lemonade and Sizzling Brownie too!',
  },
  {
    id: 'rev-3',
    author: 'Muhammad Bilal Khan',
    rating: 5,
    date: 'WhatsApp Delivery Order',
    comment: 'Ordered through WhatsApp to our home in Sukkur. Food was delivered fresh and steaming hot within 35 minutes. Portion sizes are generous and prices are very reasonable.',
  },
];
