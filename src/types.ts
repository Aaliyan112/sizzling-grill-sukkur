export type SizzlingCategory =
  | 'Appetizers'
  | 'Soups'
  | 'Salads'
  | 'Chicken Karahi'
  | 'Mutton Karahi'
  | 'Chicken Handi'
  | 'Mutton Handi'
  | 'Pakistani Specials'
  | 'Biryani Specials'
  | 'Mutton Dishes'
  | 'Chicken Specials'
  | 'BBQ'
  | 'Chinese Gravy With Rice'
  | 'Chinese Gravy Without Rice'
  | 'Rice'
  | 'Chowmein'
  | 'Pasta'
  | 'Tandoor'
  | 'Cold Beverages'
  | 'Desserts'
  | 'Tea & Hot Coffee'
  | 'Smoothies'
  | 'Frappe'
  | 'Ice Tea'
  | 'Shakes'
  | 'Slush Drinks'
  | 'Zesty Zips Lemonade'
  | 'Colada'
  | 'Margarita'
  | 'Mojito'
  | 'Scoop Ice Cream';

export interface PortionOption {
  label: 'Half' | 'Full' | 'Single' | 'Double' | 'Regular' | 'Large' | 'Standard';
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: SizzlingCategory;
  description?: string;
  portions: PortionOption[];
  isVegetarian?: boolean;
  isSpecialty?: boolean;
  isSpicy?: boolean;
  image?: string;
  needsVerification?: boolean; // flags items where price should be confirmed with the kitchen
  note?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'BBQ & Sizzlers' | 'Karahi & Handi' | 'Interior & Dining' | 'Beverages & Desserts';
  image: string;
  caption: string;
}

export interface CartItem {
  item: MenuItem;
  selectedPortion: PortionOption;
  quantity: number;
}

export interface ReservationData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: string;
  specialRequests?: string;
}
