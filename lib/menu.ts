export type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    price: "$12",
    description:
      "A classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, and fragrant basil leaves. Simple, timeless, and satisfying.",
  },
  {
    id: "grilled-salmon",
    name: "Grilled Salmon",
    price: "$18",
    description:
      "Atlantic salmon fillet grilled to perfection, served with a lemon-dill butter sauce and seasonal vegetables. A light yet hearty choice.",
  },
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    price: "$8",
    description:
      "A warm dark-chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream. The perfect sweet finish to any meal.",
  },
];

export function getMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
