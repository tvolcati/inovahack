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
  Clock
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"

const initialCollectionPoints = [
  {
    id: 1,
    name: "Posto Saúde Centro SP",
    address: "Rua Principal, 123",
    hours: "Seg-Sex: 08:00 - 17:00",
    icon: <HeartPulse className="h-6 w-6 text-green-600" />,
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
    icon: <Users className="h-6 w-6 text-green-600" />,
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
    icon: <Leaf className="h-6 w-6 text-green-600" />,
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
    icon: <Recycle className="h-6 w-6 text-green-600" />,
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
    icon: <HeartPulse className="h-6 w-6 text-green-600" />,
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
    icon: <HeartPulse className="h-6 w-6 text-green-600" />,
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
    icon: <Recycle className="h-6 w-6 text-green-600" />,
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
    icon: <Users className="h-6 w-6 text-green-600" />,
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
    icon: <Leaf className="h-6 w-6 text-green-600" />,
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
    icon: <Recycle className="h-10 w-10 text-green-600 mb-3" />,
    content:
      "Ressignificar resíduos eletrônicos em soluções inovadoras para a saúde pública e o meio ambiente, combatendo arboviroses de forma acessível e sustentável através do dispositivo Vaporaid.",
  },
  {
    title: "Nossa Visão",
    icon: <Lightbulb className="h-10 w-10 text-green-600 mb-3" />,
    content:
      "Ser referência em inovação social e economia circular, inspirando a colaboração entre setor público, privado e comunidade para transformar desafios complexos em bem-estar coletivo e um futuro mais saudável.",
  },
  {
    title: "Nossos Valores",
    icon: <HeartPulse className="h-10 w-10 text-green-600 mb-3" />,
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
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="#" className="flex items-center gap-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-700">Vaporaid</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-slate-600 hover:text-green-600">
              Sobre o Projeto
            </Link>
            <Link href="#coleta" className="text-slate-600 hover:text-green-600 font-semibold">
              Pontos de Coleta
            </Link>
            <Link href="#nossos-pilares" className="text-slate-600 hover:text-green-600">
              Nossos Pilares
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vaporaid: Transformando Resíduos em Saúde e Sustentabilidade
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Seus vapes descartados podem se tornar poderosos aliados no combate a mosquitos como o Aedes aegypti.
              Descubra onde temos pontos de coleta.
            </p>
            <Link href="#coleta">
              <Button
                size="lg"
                variant="outline"
                className="text-green-600 border-white bg-white hover:bg-green-50 hover:text-green-700"
              >
                Encontrar Ponto de Coleta <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="sobre" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">O Desafio e a Solução Vaporaid</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
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
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-700 mb-3">
                  Nossa Proposta: Ressignificar para Proteger
                </h3>
                <p className="text-slate-600 mb-4">
                  O Vaporaid é um dispositivo vaporizador de repelente líquido, desenvolvido a partir da reutilização de
                  componentes de cigarros eletrônicos (vapes/pods) apreendidos e doados.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <Recycle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Componentes Reutilizados:</strong> Baterias e atomizadores.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Funcionamento Simples:</strong> Um interruptor ativa a vaporização do repelente,
                      protegendo o ambiente.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <PackageOpen className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Distribuição Gratuita:</strong> Dispositivo distribuido em postos de saúde e prefeituras.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Pontos de Coleta */}
        <section id="coleta" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">Pontos de Coleta</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Encontre o ponto de coleta mais próximo de você e contribua para um futuro mais sustentável.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
              <Select onValueChange={handleStateChange}>
                <SelectTrigger className="w-full md:w-1/3">
                  <SelectValue placeholder="Selecione o Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Estados</SelectItem>
                  {uniqueStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={handleCityChange} disabled={!selectedState}>
                <SelectTrigger className="w-full md:w-1/3">
                  <SelectValue placeholder="Selecione a Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Cidades</SelectItem>
                  {availableCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={handleNeighborhoodChange} disabled={!selectedCity}>
                <SelectTrigger className="w-full md:w-1/3">
                  <SelectValue placeholder="Selecione o Bairro" />
                </SelectTrigger>
                <SelectContent>
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
                      <Card key={point.id} className="h-100 flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader className="flex-shrink-0 pb-3">
                          <div className="flex items-center gap-3 mb-2">
                            {point.icon}
                            <CardTitle className="text-lg text-slate-700 line-clamp-2">{point.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between pt-0">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-slate-600 line-clamp-2">{point.address}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-slate-600">{point.hours}</p>
                            </div>
                          </div>
                          <div className="aspect-video w-full rounded-md overflow-hidden mt-auto">
                        <iframe className="my-3 rounded-md"
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
                      <Button variant="outline" size="icon" onClick={prevCollectionSlide} className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-slate-600">
                        {Math.floor(currentCollectionStartIndex / ITEMS_PER_COLLECTION_SLIDE) + 1} de{" "}
                        {Math.ceil(filteredPoints.length / ITEMS_PER_COLLECTION_SLIDE)}
                      </span>
                      <Button variant="outline" size="icon" onClick={nextCollectionSlide} className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-600 text-lg">
                    Nenhum ponto de coleta encontrado com os filtros selecionados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ciclo de Vida e Sustentabilidade */}
        <section className="bg-slate-100 py-16 px-4">
          <div className="container mx-auto">
            {/* Título centralizado acima de tudo */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Ciclo de Vida Sustentável
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                O Vaporaid é pensado para um ciclo completo, da produção ao
                descarte consciente e recondicionamento.
              </p>
            </div>

            {/* Container principal com as duas divs lado a lado */}
            <div className="flex items-center justify-center gap-8">
              {/* Div dos Cards */}
              <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-slate-700">
                        1. Coleta e Doação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vapes e pods são coletados em pontos específicos, doados
                        pela população e parceiros.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-slate-700">
                        2. Transformação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Componentes são testados, adaptados e montados no
                        dispositivo Vaporaid com repelente.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-slate-700">
                        3. Uso e Devolução
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Após seu uso, por completo, o Vaporaid é devolvido para
                        recondicionamento, fechando o ciclo.
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
                    className="rounded-lg shadow-lg mx-auto"
                  />
                  <p className="text-slate-600 mt-4 text-sm">
                    Campanhas de conscientização educam sobre o descarte correto
                    e a importância da devolução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nossos-pilares" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-700 mb-4">Nossos Pilares</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
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
                      <Card className="min-h-[300px] md:min-h-[320px] flex flex-col justify-center items-center text-center p-6 md:p-8">
                        <CardHeader className="items-center">
                          {item.icon}
                          <CardTitle className="text-2xl text-slate-700">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-600 text-sm sm:text-base">
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
                className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
                onClick={prevMVVSlide}
                aria-label="Slide Anterior"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
                onClick={nextMVVSlide}
                aria-label="Próximo Slide"
              >
                <ChevronRight className="h-6 w-6 text-slate-600" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-green-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se à Revolução Vaporaid!</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Sua pequena ação de doar um vape pode ter um grande impacto na saúde da sua comunidade e na preservação do
              meio ambiente.
            </p>
            <Link href="#coleta">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50">
                Encontrar Ponto de Coleta Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link href="#" className="flex items-center justify-center gap-2 mb-2">
              <Recycle className="h-7 w-7 text-green-500" />
              <span className="text-xl font-bold text-white">Vaporaid</span>
            </Link>
            <p className="text-sm">Transformando resíduos em bem-estar.</p>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="#sobre" className="hover:text-green-400">
              Sobre
            </Link>
            <Link href="#coleta" className="hover:text-green-400">
              Coleta
            </Link>
            <Link href="#nossos-pilares" className="hover:text-green-400">
              Nossos Pilares
            </Link>
            <Link href="#" className="hover:text-green-400">
              Contato
            </Link>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Projeto Vaporaid. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
