---
title: Análise de Custos
sidebar_position: 1
---

# Análise de Custos

&emsp;Esta análise considera a arquitetura de produção do Desenrolai, que é diferente da prova de conceito desenvolvida anteriormente. O detalhamento da evolução arquitetural e as adaptações para escala estão aprofundados na seção de roadmap pós-hackathon. Aqui, trabalhamos com os custos reais da implementação escolhida para levar o produto à produção, priorizando o uso de recursos mínimos e infraestrutura enxuta.

---

## 1. Premissas de Crescimento (Ano 1)

- **Usuários iniciais:** 50
- **Crescimento mensal:** 20%
- **Usuários finais (mês 12):** ~1.974
- **Interações por usuário/mês:** 4
- **Tokens por interação:** 1.500 (input + output)
- **Total de interações no ano 1:** ~47.376

---

## 2. Custos Mensais – Infraestrutura e Serviços

| Serviço                  | Descrição                                                        | Valor Estimado (R$) | Observações                                                                                  |
|--------------------------|------------------------------------------------------------------|---------------------|---------------------------------------------------------------------------------------------|
| EC2 t2.micro             | Hospedagem EvolutionAPI e WhatsApp API Evolution                 | 46                  | Instância única, custo fixo mensal[4]                                                       |
| PostgreSQL Gerenciado    | Banco de dados gerenciado (AWS RDS, GCP, etc.)                   | 60                  | Plano básico suficiente para MVP[2]                                                         |
| Redis                    | Armazenamento de histórico de conversas                          | 35                  | Free tier cobre até 30MB; plano básico se necessário[3]                                     |
| VPS própria (frontend)   | Hospedagem do frontend Next.js                                   | 0                   | Infraestrutura já existente, custo marginal                                                 |
| WhatsApp API Evolution   | Rodando no EC2, sem custo adicional de API                       | 0                   | Incluído no custo do EC2                                                                    |
| Domínio e SSL            | Registro de domínio e certificado SSL                            | 30                  | Custo anual rateado mensalmente                                                             |
| Lambdas (backend, agents, e-mail) | Funções AWS Lambda para backend, agentes e envio de e-mails | 0                   | Uso dentro do free tier da AWS Lambda[1]                                                    |

---

## 3. Custos com IA (Tokens GPT)

| Modelo         | Custo por 1M tokens (US$) | Custo Mensal Estimado (R$) | Observações                                   |
|----------------|---------------------------|----------------------------|----------------------------------------------|
| GPT 4.1-nano   | $0,50                     | 6                          | Tokens distribuídos ao longo do mês           |
| o3-mini        | $5,50                     | 66                         | Tokens distribuídos ao longo do mês           |

*Cotação US$ 1 = R$ 5,50*  

---

## 4. Justificativa para Uso do AWS Lambda Gratuito

O AWS Lambda oferece um free tier que cobre até 1 milhão de requisições e 400.000 GB-segundos de computação por mês, o que é mais do que suficiente para o volume inicial e médio de usuários do Desenrolai no primeiro ano. Isso permite que as funções backend, agents e envio de e-mails operem sem custo, reduzindo drasticamente o investimento inicial e operacional. A arquitetura serverless também garante escalabilidade automática e cobrança apenas pelo uso efetivo, alinhando-se ao perfil de crescimento gradual da solução[1].

---

## 5. Estimativa de Custos Mensais ao Longo do Ano 1

| Mês | Usuários Estimados | Custo Infraestrutura (R$) | Custo IA (R$) | Custo Total (R$) |
|-----|--------------------|---------------------------|---------------|------------------|
| 1   | 50                 | 171                       | 6             | 177              |
| 2   | 60                 | 171                       | 7             | 178              |
| 3   | 72                 | 171                       | 8             | 179              |
| 4   | 86                 | 171                       | 9             | 180              |
| 5   | 103                | 171                       | 11            | 182              |
| 6   | 124                | 171                       | 13            | 184              |
| 7   | 149                | 171                       | 15            | 186              |
| 8   | 179                | 171                       | 18            | 189              |
| 9   | 214                | 171                       | 21            | 192              |
| 10  | 257                | 171                       | 25            | 196              |
| 11  | 309                | 171                       | 30            | 201              |
| 12  | 371                | 171                       | 36            | 207              |

*Custos de infraestrutura são fixos; IA cresce com o número de tokens consumidos.*

---

## 6. Considerações Finais

- A arquitetura serverless com AWS Lambda permite manter custos fixos muito baixos, especialmente no primeiro ano.
- O uso do EC2 t2.micro para EvolutionAPI é o principal custo fixo mensal.
- O uso do Redis e PostgreSQL em planos básicos garante persistência e performance adequadas para o MVP.
- O frontend em VPS própria elimina custos adicionais de hospedagem.
- O modelo de crescimento conservador e uso do free tier AWS Lambda garantem sustentabilidade financeira inicial.

---

## Referências

[1] SIMFORM. AWS Lambda Pricing: How Much it Costs to Run a Serverless Application. Disponível em: https://www.simform.com/blog/aws-lambda-pricing/. Acesso em: 20 jun. 2025.

[2] POSTGRESQL GLOBAL DEVELOPMENT GROUP. PostgreSQL. Disponível em: https://www.postgresql.org. Acesso em: 20 jun. 2025.

[3] BYTEPLUS. Billing items and prices--Cache for Redis-Byteplus. Disponível em: https://docs.byteplus.com/en/docs/redis/billing-item-price. Acesso em: 20 jun. 2025.

[4] GIST. Display the price summary of AWS EC2's spot instances across all regions and availability zones. Disponível em: https://gist.github.com/ikuyamada/364b29342a3dd14153eddbc6417543d8. Acesso em: 20 jun. 2025.
