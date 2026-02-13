export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Burger Angus",
        description: "Hambúrguer artesanal de carne Angus com queijo cheddar maturado, bacon crocante e molho especial da casa.",
        price: "R$ 42,90",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Picanha Premium",
        description: "Picanha premium fatiada no ponto perfeito, acompanhada de farofa especial, vinagrete e arroz.",
        price: "R$ 89,90",
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&h=600&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Costela BBQ",
        description: "Costela bovina defumada por 12 horas com molho BBQ artesanal, acompanhada de coleslaw e pão de alho.",
        price: "R$ 79,90",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=600&fit=crop&q=80",
    },
];
