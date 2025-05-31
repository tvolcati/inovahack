"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Recycle,
  HeartPulse,
  Leaf,
  Users,
  Lightbulb,
  PackageOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { ContactModal } from "../components/contact-modal"

const initialCollectionPoints = [
  {
    id: 1,
    name: "Posto Saúde Centro SP",
    address: "Rua Principal, 123",
    hours: "Seg-Sex: 08:00 - 17:00",
    icon: <HeartPulse className="h-6 w-6 text-[#3f8ec9]" />,
    state: "SP",
    city: "São Paulo",
    neighborhood: "Centro",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 2,
    name: "Prefeitura Pinheiros SP",
    address: "Av. Faria Lima, 456",
    hours: "Seg-Sex: 09:00 - 18:00",
    icon: <Users className="h-6 w-6 text-[#3f8ec9]" />,
    state: "SP",
    city: "São Paulo",
    neighborhood: "Pinheiros",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 3,
    name: "Comunitário V. Madalena SP",
    address: "Rua Harmonia, 789",
    hours: "Ter-Sáb: 10:00 - 16:00",
    icon: <Leaf className="h-6 w-6 text-[#3f8ec9]" />,
    state: "SP",
    city: "São Paulo",
    neighborhood: "Vila Madalena",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 4,
    name: "Eco Ponto Lapa SP",
    address: "Rua da Lapa, 100",
    hours: "Seg-Sex: 08:00 - 17:00",
    icon: <Recycle className="h-6 w-6 text-[#3f8ec9]" />,
    state: "SP",
    city: "São Paulo",
    neighborhood: "Lapa",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 5,
    name: "Posto Saúde Campinas",
    address: "Av. Brasil, 789",
    hours: "Seg-Sex: 08:00 - 17:00",
    icon: <HeartPulse className="h-6 w-6 text-[#3f8ec9]" />,
    state: "SP",
    city: "Campinas",
    neighborhood: "Guanabara",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 6,
    name: "Posto Saúde Central RJ",
    address: "Rua da Praia, 123",
    hours: "Seg-Sex: 08:00 - 17:00",
    icon: <HeartPulse className="h-6 w-6 text-[#3f8ec9]" />,
    state: "RJ",
    city: "Rio de Janeiro",
    neighborhood: "Centro",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 7,
    name: "Eco Ponto Copacabana RJ",
    address: "Av. Atlântica, 456",
    hours: "Seg-Sex: 09:00 - 18:00",
    icon: <Recycle className="h-6 w-6 text-[#3f8ec9]" />,
    state: "RJ",
    city: "Rio de Janeiro",
    neighborhood: "Copacabana",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 8,
    name: "Ponto BH Centro",
    address: "Rua Bahia, 1000",
    hours: "Seg-Sex: 09:00 - 17:00",
    icon: <Users className="h-6 w-6 text-[#3f8ec9]" />,
    state: "MG",
    city: "Belo Horizonte",
    neighborhood: "Centro",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
  {
    id: 9,
    name: "Coleta Savassi BH",
    address: "Av. Contorno, 2000",
    hours: "Ter-Sáb: 10:00 - 16:00",
    icon: <Leaf className="h-6 w-6 text-[#3f8ec9]" />,
    state: "MG",
    city: "Belo Horizonte",
    neighborhood: "Savassi",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.099770780902!2d-46.65682708488309!3d-23.56407408468257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr",
  },
]

const missionVisionValuesData = [
  {
    title: "Nossa Missão",
    icon: <Recycle className="h-10 w-10 text-[#3f8ec9] mb-3" />,
    content:
      "Ressignificar resíduos eletrônicos em soluções inovadoras para a saúde pública e o meio ambiente, combatendo arboviroses de forma acessível e sustentável através do dispositivo Vaporaid.",
  },
  {
    title: "Nossa Visão",
    icon: <Lightbulb className="h-10 w-10 text-[#3f8ec9] mb-3" />,
    content:
      "Ser referência em inovação social e economia circular, inspirando a colaboração entre setor público, privado e comunidade para transformar desafios complexos em bem-estar coletivo e um futuro mais saudável.",
  },
  {
    title: "Nossos Valores",
    icon: <HeartPulse className="h-10 w-10 text-[#3f8ec9] mb-3" />,
    content: (
      <ul className="list-disc list-inside space-y-1 text-left text-sm sm:text-base">
        {" "}
        <li>
          <strong>Sustentabilidade:</strong> Compromisso com o planeta e o uso consciente de recursos.
        </li>{" "}
        <li>
          <strong>Inovação:</strong> Busca contínua por soluções criativas e eficazes.
        </li>{" "}
        <li>
          <strong>Impacto Social:</strong> Foco em gerar benefícios tangíveis para a comunidade.
        </li>{" "}
        <li>
          <strong>Colaboração:</strong> Crença no poder da união para alcançar grandes objetivos.
        </li>{" "}
        <li>
          <strong>Transparência:</strong> Clareza em nossas ações e comunicação com a sociedade.
        </li>{" "}
      </ul>
    ),
  },
]

const ITEMS_PER_COLLECTION_SLIDE = 3

export default function VaporaidLandingPage() {
  const [currentMVVSlide, setCurrentMVVSlide] = useState(0)
  const nextMVVSlide = () => setCurrentMVVSlide((prev) => (prev === missionVisionValuesData.length - 1 ? 0 : prev + 1))
  const prevMVVSlide = () => setCurrentMVVSlide((prev) => (prev === 0 ? missionVisionValuesData.length - 1 : prev - 1))

  const [selectedState, setSelectedState] = useState<string | undefined>(undefined)
  const [selectedCity, setSelectedCity] = useState<string | undefined>(undefined)
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | undefined>(undefined)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const [filteredPoints, setFilteredPoints] = useState(initialCollectionPoints)
  const [currentCollectionStartIndex, setCurrentCollectionStartIndex] = useState(0)

  const uniqueStates = useMemo(() => [...new Set(initialCollectionPoints.map((p) => p.state))].sort(), [])
  const availableCities = useMemo(() => {
    if (!selectedState) return []
    return [...new Set(initialCollectionPoints.filter((p) => p.state === selectedState).map((p) => p.city))].sort()
  }, [selectedState])
  const availableNeighborhoods = useMemo(() => {
    if (!selectedCity) return []
    return [
      ...new Set(
        initialCollectionPoints
          .filter((p) => p.state === selectedState && p.city === selectedCity)
          .map((p) => p.neighborhood),
      ),
    ].sort()
  }, [selectedState, selectedCity])

  useEffect(() => {
    let points = initialCollectionPoints
    if (selectedState) points = points.filter((p) => p.state === selectedState)
    if (selectedCity) points = points.filter((p) => p.city === selectedCity)
    if (selectedNeighborhood) points = points.filter((p) => p.neighborhood === selectedNeighborhood)
    setFilteredPoints(points)
    setCurrentCollectionStartIndex(0)
  }, [selectedState, selectedCity, selectedNeighborhood])

  const nextCollectionSlide = () => {
    setCurrentCollectionStartIndex((prev) => {
      const nextIndex = prev + ITEMS_PER_COLLECTION_SLIDE
      return nextIndex >= filteredPoints.length ? 0 : nextIndex
    })
  }
  const prevCollectionSlide = () => {
    setCurrentCollectionStartIndex((prev) => {
      const prevIndex = prev - ITEMS_PER_COLLECTION_SLIDE
      if (prevIndex < 0) {
        // Go to the start of the last page
        return Math.floor((filteredPoints.length - 1) / ITEMS_PER_COLLECTION_SLIDE) * ITEMS_PER_COLLECTION_SLIDE
      }
      return prevIndex
    })
  }

  const handleStateChange = (value: string) => {
    setSelectedState(value === "all" ? undefined : value)
    setSelectedCity(undefined)
    setSelectedNeighborhood(undefined)
  }
  const handleCityChange = (value: string) => {
    setSelectedCity(value === "all" ? undefined : value)
    setSelectedNeighborhood(undefined)
  }
  const handleNeighborhoodChange = (value: string) => {
    setSelectedNeighborhood(value === "all" ? undefined : value)
  }

  const collectionPointsToShow = useMemo(() => {
    return filteredPoints.slice(currentCollectionStartIndex, currentCollectionStartIndex + ITEMS_PER_COLLECTION_SLIDE)
  }, [filteredPoints, currentCollectionStartIndex])

  return (
    <div className="flex flex-col min-h-screen bg-[#fffaf2] text-[#0f1f2a]">
      <header className="sticky top-0 z-50 w-full bg-[#fffaf2] shadow-md border-b border-[#dfdad3]">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="#" className="flex items-center gap-2">
            <Recycle className="h-8 w-8 text-[#b13537]" />
            <span className="text-2xl font-bold text-[#b13537]">Vaporaid</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-[#8d8c8c] hover:text-[#3f8ec9] transition-colors">
              Sobre o Projeto
            </Link>
            <Link href="#coleta" className="text-[#8d8c8c] hover:text-[#3f8ec9] font-semibold transition-colors">
              Pontos de Coleta
            </Link>
            <Link href="#nossos-pilares" className="text-[#8d8c8c] hover:text-[#3f8ec9] transition-colors">
              Nossos Pilares
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#b13537] to-[#8d1a1c] text-[#fffaf2] py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vaporaid: Transformando Resíduos em Saúde e Sustentabilidade
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Seus vapes descartados podem se tornar poderosos aliados no combate a mosquitos como o Aedes aegypti.
              Descubra onde temos pontos de coleta.
            </p>
            <Link href="#coleta">
              <Button
                size="lg"
                className="bg-[#3f8ec9] text-[#fffaf2] border-[#3f8ec9] hover:bg-[#2d7bb8] hover:border-[#2d7bb8] transition-colors"
              >
                Encontrar Ponto de Coleta <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="sobre" className="py-16 px-4 bg-[#fffaf2]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f1f2a] mb-4">O Desafio e a Solução Vaporaid</h2>
              <p className="text-[#8d8c8c] max-w-2xl mx-auto">
                Enfrentamos dois grandes problemas: o descarte inadequado de cigarros eletrônicos e a persistência de
                doenças transmitidas por mosquitos. O Vaporaid surge como uma resposta inovadora.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?width=500&height=350"
                  alt="Ilustração do problema: vapes descartados e mosquito"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg mx-auto border border-[#dfdad3]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#0f1f2a] mb-3">
                  Nossa Proposta: Ressignificar para Proteger
                </h3>
                <p className="text-[#8d8c8c] mb-4">
                  O Vaporaid é um dispositivo vaporizador de repelente líquido, desenvolvido a partir da reutilização de
                  componentes de cigarros eletrônicos (vapes/pods) apreendidos e doados.
                </p>
                <ul className="space-y-2 text-[#8d8c8c]">
                  <li className="flex items-start">
                    <Recycle className="h-5 w-5 text-[#3f8ec9] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-[#0f1f2a]">Componentes Reutilizados:</strong> Baterias e atomizadores.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-[#3f8ec9] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-[#0f1f2a]">Funcionamento Simples:</strong> Um interruptor ativa a
                      vaporização do repelente, protegendo o ambiente.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PackageOpen className="h-5 w-5 text-[#3f8ec9] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-[#0f1f2a]">Distribuição Gratuita:</strong> Dispositivo distribuido em
                      postos de saúde e prefeituras.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Pontos de Coleta */}
        <section id="coleta" className="py-16 px-4 bg-[#dfdad3]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f1f2a] mb-4">Pontos de Coleta</h2>
              <p className="text-[#8d8c8c] max-w-2xl mx-auto">
                Encontre o ponto de coleta mais próximo de você e contribua para um futuro mais sustentável.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
              <Select onValueChange={handleStateChange}>
                <SelectTrigger className="w-full md:w-1/3 bg-[#fffaf2] border-[#bab9b9] text-[#0f1f2a]">
                  <SelectValue placeholder="Selecione o Estado" />
                </SelectTrigger>
                <SelectContent className="bg-[#fffaf2] border-[#bab9b9]">
                  <SelectItem value="all">Todos os Estados</SelectItem>
                  {uniqueStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={handleCityChange} disabled={!selectedState}>
                <SelectTrigger className="w-full md:w-1/3 bg-[#fffaf2] border-[#bab9b9] text-[#0f1f2a] disabled:opacity-50">
                  <SelectValue placeholder="Selecione a Cidade" />
                </SelectTrigger>
                <SelectContent className="bg-[#fffaf2] border-[#bab9b9]">
                  <SelectItem value="all">Todas as Cidades</SelectItem>
                  {availableCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={handleNeighborhoodChange} disabled={!selectedCity}>
                <SelectTrigger className="w-full md:w-1/3 bg-[#fffaf2] border-[#bab9b9] text-[#0f1f2a] disabled:opacity-50">
                  <SelectValue placeholder="Selecione o Bairro" />
                </SelectTrigger>
                <SelectContent className="bg-[#fffaf2] border-[#bab9b9]">
                  <SelectItem value="all">Todos os Bairros</SelectItem>
                  {availableNeighborhoods.map((neighborhood) => (
                    <SelectItem key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Cards dos Pontos de Coleta */}
            <div className="relative">
              {filteredPoints.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {collectionPointsToShow.map((point) => (
                      <Card
                        key={point.id}
                        className="h-100 flex flex-col shadow-lg hover:shadow-xl transition-shadow bg-[#fffaf2] border-[#bab9b9]"
                      >
                        <CardHeader className="flex-shrink-0 pb-3">
                          <div className="flex items-center gap-3 mb-2">
                            {point.icon}
                            <CardTitle className="text-lg text-[#0f1f2a] line-clamp-2">{point.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between pt-0">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-[#8d8c8c] mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-[#8d8c8c] line-clamp-2">{point.address}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-[#8d8c8c] mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-[#8d8c8c]">{point.hours}</p>
                            </div>
                          </div>
                          <div className="aspect-video w-full rounded-md overflow-hidden mt-auto border border-[#bab9b9]">
                            <iframe
                              className="my-3 rounded-md"
                              src={point.mapEmbedUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen={false}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Mapa para ${point.name}`}
                            ></iframe>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Navegação do Carrossel */}
                  {filteredPoints.length > ITEMS_PER_COLLECTION_SLIDE && (
                    <div className="flex justify-center items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevCollectionSlide}
                        className="rounded-full bg-[#fffaf2] border-[#bab9b9] text-[#0f1f2a] hover:bg-[#dfdad3]"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-[#8d8c8c]">
                        {Math.floor(currentCollectionStartIndex / ITEMS_PER_COLLECTION_SLIDE) + 1} de{" "}
                        {Math.ceil(filteredPoints.length / ITEMS_PER_COLLECTION_SLIDE)}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextCollectionSlide}
                        className="rounded-full bg-[#fffaf2] border-[#bab9b9] text-[#0f1f2a] hover:bg-[#dfdad3]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-[#8d8c8c] text-lg">
                    Nenhum ponto de coleta encontrado com os filtros selecionados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ciclo de Vida e Sustentabilidade */}
        <section className="bg-[#bab9b9] py-16 px-4">
          <div className="container mx-auto">
            {/* Título centralizado acima de tudo */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f1f2a] mb-4">Ciclo de Vida Sustentável</h2>
              <p className="text-[#8d8c8c] max-w-2xl mx-auto">
                O Vaporaid é pensado para um ciclo completo, da produção ao descarte consciente e recondicionamento.
              </p>
            </div>

            {/* Container principal com as duas divs lado a lado */}
            <div className="flex items-center justify-center gap-8">
              {/* Div dos Cards */}
              <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-8">
                  <Card className="bg-[#fffaf2] border-[#dfdad3]">
                    <CardHeader>
                      <CardTitle className="text-[#0f1f2a]">1. Coleta e Doação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#8d8c8c]">
                        Vapes e pods são coletados em pontos específicos, doados pela população e parceiros.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#fffaf2] border-[#dfdad3]">
                    <CardHeader>
                      <CardTitle className="text-[#0f1f2a]">2. Transformação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#8d8c8c]">
                        Componentes são testados, adaptados e montados no dispositivo Vaporaid com repelente.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#fffaf2] border-[#dfdad3]">
                    <CardHeader>
                      <CardTitle className="text-[#0f1f2a]">3. Uso e Devolução</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#8d8c8c]">
                        Após seu uso, por completo, o Vaporaid é devolvido para recondicionamento, fechando o ciclo.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Div da Imagem */}
              <div>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?width=600&height=300"
                    alt="Diagrama do ciclo de vida do Vaporaid"
                    width={600}
                    height={300}
                    className="rounded-lg shadow-lg mx-auto border border-[#dfdad3]"
                  />
                  <p className="text-[#8d8c8c] mt-4 text-sm">
                    Campanhas de conscientização educam sobre o descarte correto e a importância da devolução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nossos-pilares" className="py-16 px-4 bg-[#fffaf2]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f1f2a] mb-4">Nossos Pilares</h2>
              <p className="text-[#8d8c8c] max-w-2xl mx-auto">
                Conheça a Missão, Visão e Valores que guiam o Projeto Vaporaid na busca por um futuro mais saudável e
                sustentável.
              </p>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-xl">
                {missionVisionValuesData.map((item, index) => (
                  <div
                    key={item.title}
                    className={`transition-opacity duration-500 ease-in-out ${index === currentMVVSlide ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                  >
                    {index === currentMVVSlide && (
                      <Card className="min-h-[300px] md:min-h-[320px] flex flex-col justify-center items-center text-center p-6 md:p-8 bg-[#fffaf2] border-[#dfdad3]">
                        <CardHeader className="items-center">
                          {item.icon}
                          <CardTitle className="text-2xl text-[#0f1f2a]">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-[#8d8c8c] text-sm sm:text-base">
                          {typeof item.content === "string" ? <p>{item.content}</p> : item.content}
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 rounded-full bg-[#fffaf2] border-[#bab9b9] hover:bg-[#dfdad3] text-[#0f1f2a]"
                onClick={prevMVVSlide}
                aria-label="Slide Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 rounded-full bg-[#fffaf2] border-[#bab9b9] hover:bg-[#dfdad3] text-[#0f1f2a]"
                onClick={nextMVVSlide}
                aria-label="Próximo Slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-[#3f8ec9] text-[#fffaf2]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se à Revolução Vaporaid!</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Sua pequena ação de doar um vape pode ter um grande impacto na saúde da sua comunidade e na preservação do
              meio ambiente.
            </p>
            <Link href="#coleta">
              <Button
                size="lg"
                className="bg-[#fffaf2] text-[#3f8ec9] hover:bg-[#dfdad3] border-[#fffaf2] hover:border-[#dfdad3] transition-colors"
              >
                Encontrar Ponto de Coleta Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f1f2a] text-[#bab9b9] py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link href="#" className="flex items-center justify-center gap-2 mb-2">
              <Recycle className="h-7 w-7 text-[#b13537]" />
              <span className="text-xl font-bold text-[#fffaf2]">Vaporaid</span>
            </Link>
            <p className="text-sm">Transformando resíduos em bem-estar.</p>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="#sobre" className="hover:text-[#3f8ec9] transition-colors">
              Sobre
            </Link>
            <Link href="#coleta" className="hover:text-[#3f8ec9] transition-colors">
              Coleta
            </Link>
            <Link href="#nossos-pilares" className="hover:text-[#3f8ec9] transition-colors">
              Nossos Pilares
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setContactModalOpen(true)
              }}
              className="hover:text-[#3f8ec9] transition-colors"
            >
              Contato
            </Link>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Projeto Vaporaid. Todos os direitos reservados.</p>
        </div>
      </footer>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  )
}
