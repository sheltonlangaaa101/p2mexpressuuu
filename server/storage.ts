import { type User, type InsertUser, type Store, type Promotion, type FAQ, type Step, type Testimonial, type RecentProduct, type ContactMessage, type Order } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getStores(): Promise<Store[]>;
  getPromotions(): Promise<Promotion[]>;
  getFAQs(): Promise<FAQ[]>;
  getSteps(): Promise<Step[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getRecentProducts(): Promise<RecentProduct[]>;
  createContactMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getOrderByTrackingCode(trackingCode: string): Promise<Order | undefined>;
}

const stores: Store[] = [
  { id: "1", name: "Zara", url: "https://www.zara.com", color: "#000000", description: "Moda atual para mulher, homem e criança" },
  { id: "2", name: "Stradivarius", url: "https://www.stradivarius.com", color: "#000000", description: "Tendências jovens e acessíveis" },
  { id: "3", name: "Mango", url: "https://shop.mango.com", color: "#000000", description: "Design mediterrâneo com qualidade" },
  { id: "4", name: "Bershka", url: "https://www.bershka.com", color: "#000000", description: "Moda urbana e streetwear" },
  { id: "5", name: "Pull&Bear", url: "https://www.pullandbear.com", color: "#000000", description: "Casual e relaxado para o dia-a-dia" },
  { id: "6", name: "Primark", url: "https://www.primark.com", color: "#0066B2", description: "Moda acessível para toda a família" },
  { id: "7", name: "ASOS", url: "https://www.asos.com", color: "#2D2D2D", description: "Moda online com milhares de marcas" },
  { id: "8", name: "H&M", url: "https://www2.hm.com", color: "#E50010", description: "Moda sustentável a preços acessíveis" },
  { id: "9", name: "Kiko Milano", url: "https://www.kikocosmetics.com", color: "#000000", description: "Cosméticos italianos de qualidade" },
  { id: "10", name: "Weekday", url: "https://www.weekday.com", color: "#000000", description: "Moda escandinava minimalista" },
];

const promotions: Promotion[] = [
  { id: "1", store: "ASOS", date: "29 Nov", discount: "50-70%", color: "#2D2D2D", isHot: true },
  { id: "2", store: "Mango", date: "28 Nov", discount: "50%", color: "#000000", isHot: false },
  { id: "3", store: "Primark", date: "29 Nov", discount: "80%", color: "#0066B2", isHot: true },
  { id: "4", store: "Weekday", date: "24 Nov", discount: "40%", color: "#000000", isHot: false },
  { id: "5", store: "Bershka", date: "26 Nov", discount: "50%", color: "#000000", isHot: false },
  { id: "6", store: "Pull&Bear", date: "27 Nov", discount: "50%", color: "#000000", isHot: false },
  { id: "7", store: "Zara", date: "28 Nov", discount: "70%", color: "#000000", isHot: true },
  { id: "8", store: "H&M", date: "29 Nov", discount: "60%", color: "#E50010", isHot: true },
];

const faqs: FAQ[] = [
  {
    id: "1",
    question: "Como é calculado o preço?",
    answer: "O preço é calculado com base no peso do artigo. A nossa taxa é de 1400 MT por quilograma. Após escolher o produto, enviamos-lhe um orçamento detalhado com o peso estimado e o valor total.",
  },
  {
    id: "2",
    question: "Quanto tempo leva a chegar?",
    answer: "O prazo de entrega é de 5 dias úteis a partir do momento em que o artigo é enviado de Portugal para Moçambique. Receberá atualizações sobre o estado da sua encomenda.",
  },
  {
    id: "3",
    question: "Posso encomendar vários itens?",
    answer: "Sim! Pode encomendar quantos itens quiser de diferentes lojas. Consolidamos todos numa única encomenda para otimizar os custos de envio.",
  },
  {
    id: "4",
    question: "Posso encomendar produtos de cosmética?",
    answer: "Sim, aceitamos encomendas de cosméticos, incluindo produtos da Kiko Milano e outras marcas. Garantimos embalagem segura para evitar danos durante o transporte.",
  },
  {
    id: "5",
    question: "Como confirmo o pagamento?",
    answer: "Após receber o orçamento, pode confirmar o pagamento via M-Pesa ou transferência bancária. Envie o comprovativo pelo WhatsApp e processamos a sua encomenda imediatamente.",
  },
  {
    id: "6",
    question: "E se o produto estiver esgotado?",
    answer: "Se o produto selecionado estiver esgotado, entramos em contacto consigo para oferecer alternativas ou proceder ao reembolso integral.",
  },
];

const steps: Step[] = [
  { id: 1, icon: "ShoppingBag", title: "Escolha a Loja", description: "Navegue pelo nosso catálogo e clique na loja desejada." },
  { id: 2, icon: "Link", title: "Selecione o Produto", description: "Escolha o produto e copie o link ou tire um print." },
  { id: 3, icon: "MessageCircle", title: "Envie pelo WhatsApp", description: "Partilhe o link/print connosco via WhatsApp." },
  { id: 4, icon: "Calculator", title: "Receba o Orçamento", description: "Enviamos o preço final com peso estimado + taxa." },
  { id: 5, icon: "CreditCard", title: "Confirme e Pague", description: "Confirme a encomenda e realize o pagamento." },
  { id: 6, icon: "Truck", title: "Receba em Casa", description: "Receba o seu artigo em Moçambique em 5 dias úteis!" },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Silva",
    location: "Maputo",
    avatar: "",
    rating: 5,
    text: "Serviço excelente! Recebi as minhas encomendas da Zara em apenas 5 dias. Muito profissionais e comunicação clara pelo WhatsApp.",
    date: "Novembro 2024"
  },
  {
    id: "2",
    name: "João Macuácua",
    location: "Beira",
    avatar: "",
    rating: 5,
    text: "Já fiz várias encomendas e nunca tive problemas. Preço justo e entrega sempre dentro do prazo. Recomendo a 100%!",
    date: "Outubro 2024"
  },
  {
    id: "3",
    name: "Maria Tembe",
    location: "Matola",
    avatar: "",
    rating: 5,
    text: "Finalmente posso comprar roupa de qualidade europeia sem sair de casa. A Nia Express mudou a minha vida!",
    date: "Novembro 2024"
  },
  {
    id: "4",
    name: "Carlos Mondlane",
    location: "Maputo",
    avatar: "",
    rating: 4,
    text: "Bom serviço e atenção ao cliente. A embalagem chegou em perfeitas condições. Vou continuar a usar.",
    date: "Setembro 2024"
  },
  {
    id: "5",
    name: "Fatima Armando",
    location: "Nampula",
    avatar: "",
    rating: 5,
    text: "Comprei cosméticos da Kiko Milano e chegaram todos intactos. Muito cuidado no manuseamento. Adorei!",
    date: "Outubro 2024"
  },
  {
    id: "6",
    name: "Pedro Sitoe",
    location: "Quelimane",
    avatar: "",
    rating: 5,
    text: "Processo simples e rápido. Enviei o link pelo WhatsApp e em menos de uma semana tinha tudo em casa.",
    date: "Novembro 2024"
  }
];

const recentProducts: RecentProduct[] = [
  { id: "1", name: "Casaco Oversize", store: "Zara", image: "", customerName: "Ana S.", purchaseDate: "Nov 2024" },
  { id: "2", name: "Vestido Midi", store: "Mango", image: "", customerName: "Maria T.", purchaseDate: "Nov 2024" },
  { id: "3", name: "Ténis Casual", store: "ASOS", image: "", customerName: "João M.", purchaseDate: "Nov 2024" },
  { id: "4", name: "Conjunto Desportivo", store: "H&M", image: "", customerName: "Carlos M.", purchaseDate: "Out 2024" },
  { id: "5", name: "Mala de Mão", store: "Stradivarius", image: "", customerName: "Fatima A.", purchaseDate: "Out 2024" },
  { id: "6", name: "Kit Maquilhagem", store: "Kiko Milano", image: "", customerName: "Luisa C.", purchaseDate: "Nov 2024" },
  { id: "7", name: "Jeans Skinny", store: "Bershka", image: "", customerName: "Pedro S.", purchaseDate: "Nov 2024" },
  { id: "8", name: "Blazer Clássico", store: "Pull&Bear", image: "", customerName: "Diana R.", purchaseDate: "Out 2024" },
];

const sampleOrders: Order[] = [
  {
    id: "1",
    trackingCode: "NIA2024001",
    customerName: "Cliente Teste",
    status: "delivered",
    statusDescription: "Encomenda entregue com sucesso",
    createdAt: "2024-11-01",
    updatedAt: "2024-11-06",
    estimatedDelivery: "2024-11-06"
  },
  {
    id: "2",
    trackingCode: "NIA2024002",
    customerName: "Cliente Demo",
    status: "in_transit",
    statusDescription: "Em trânsito para Moçambique",
    createdAt: "2024-11-20",
    updatedAt: "2024-11-22",
    estimatedDelivery: "2024-11-27"
  }
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;
  private orders: Map<string, Order>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.orders = new Map();
    sampleOrders.forEach(order => this.orders.set(order.trackingCode, order));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getStores(): Promise<Store[]> {
    return stores;
  }

  async getPromotions(): Promise<Promotion[]> {
    return promotions;
  }

  async getFAQs(): Promise<FAQ[]> {
    return faqs;
  }

  async getSteps(): Promise<Step[]> {
    return steps;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return testimonials;
  }

  async getRecentProducts(): Promise<RecentProduct[]> {
    return recentProducts;
  }

  async createContactMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage> {
    const id = randomUUID();
    const contactMessage: ContactMessage = {
      ...message,
      id,
      createdAt: new Date().toISOString()
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getOrderByTrackingCode(trackingCode: string): Promise<Order | undefined> {
    return this.orders.get(trackingCode.toUpperCase());
  }
}

export const storage = new MemStorage();
