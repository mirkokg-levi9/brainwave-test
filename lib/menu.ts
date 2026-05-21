export interface MenuItem {
  id: string;
  name: string;
  price: string;
}

export const menuItems: MenuItem[] = [
  { id: "1", name: "Margherita Pizza", price: "$12.99" },
  { id: "2", name: "Caesar Salad", price: "$9.49" },
  { id: "3", name: "Tiramisu", price: "$6.99" },
];
