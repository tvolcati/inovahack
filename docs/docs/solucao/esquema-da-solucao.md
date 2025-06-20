---
title: Esquema da Solução
sidebar_position: 2
---

# Esquema da Solução

&emsp;O Desenrolai é uma solução tecnológica que integra inteligência artificial, banco de dados e uma interface web para oferecer um roadmap personalizado de desendividamento via WhatsApp. A arquitetura da solução foi pensada para garantir eficiência, escalabilidade e acessibilidade, utilizando tecnologias modernas e robustas.

## Componentes da Solução

- **GPT 4.1-nano Evolution:** Motor de inteligência artificial responsável por processar as informações do usuário, analisar dívidas, identificar prioridades e gerar o roadmap de desendividamento.

- **MongoDB:** Banco de dados NoSQL utilizado para armazenar os dados dos usuários, incluindo informações sobre dívidas, receitas, custos, roadmaps gerados e histórico de interações.

- **Servidor Next.js:** Backend responsável por realizar consultas ao MongoDB, processar dados e renderizar o roadmap em uma interface web acessível via link personalizado para cada usuário.

- **WhatsApp Chatbot:** Canal de comunicação principal com o usuário, onde o chatbot coleta dados, entrega o roadmap e envia notificações e lembretes.

## Fluxo de Funcionamento

1. O usuário interage com o chatbot via WhatsApp, fornecendo informações sobre suas dívidas, receitas e custos mensais.
2. A IA GPT 4.1-nano processa esses dados, consulta APIs externas de notícias para identificar oportunidades de renegociação e monta um plano personalizado de desendividamento.
3. O roadmap gerado é armazenado no MongoDB, associado ao número do telefone do usuário.
4. O servidor Next.js consulta o banco de dados para renderizar o roadmap em uma página web acessível via link exclusivo.
5. O chatbot envia o link ao usuário, que pode acessar seu plano de desendividamento a qualquer momento.
6. No plano pago, funcionalidades adicionais como múltiplos roadmaps, notificações, atendimento humano e consultorias são disponibilizadas.

## Segurança e Privacidade

- No plano gratuito, apenas dados essenciais são coletados, sem informações sensíveis.
- No plano pago, são implementadas medidas de segurança como autenticação, criptografia e conformidade com a LGPD.

## Escalabilidade

- A arquitetura baseada em MongoDB e Next.js permite fácil escalabilidade horizontal.
- O uso do WhatsApp como canal reduz barreiras de entrada e amplia o alcance da solução.
