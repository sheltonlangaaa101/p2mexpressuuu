import { type User, type InsertUser, type Store, type Promotion, type FAQ, type Step } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getStores(): Promise<Store[]>;
  getPromotions(): Promise<Promotion[]>;
  getFAQs(): Promise<FAQ[]>;
  getSteps(): Promise<Step[]>;
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

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
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
}

export const storage = new MemStorage();
