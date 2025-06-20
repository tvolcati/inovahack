---
title: Roadmap Pós-Hackathon & Próximos Passos
sidebar_position: 1
---

# Roadmap Pós-Hackathon & Próximos Passos

&emsp;Esta seção apresenta o plano de ação do Desenrolai para o período imediatamente após o hackathon, com foco na transição da prova de conceito para a arquitetura de produção. Ressalta-se que a arquitetura de produção detalhada aqui é diferente da POC inicial, sendo aprofundada na seção de roadmap pós-hackathon. Todos os custos e etapas descritos consideram a implementação definitiva escolhida para levar o produto ao mercado.

---

## 1. Imediato (Próximos Dias)

- **Contratação de Especialista em Endividamento:**  
  Seleção e integração de um(a) profissional com experiência em consultoria financeira e negociação de dívidas para compor o time. Essa pessoa será responsável por validar fluxos da IA, revisar conteúdos e garantir a aderência das recomendações à realidade do público periférico.

---

## 2. Primeiro Trimestre (0-3 meses)

- **Desenvolvimento da Estrutura de Produção:**  
  - Implantação do backend e agentes em AWS Lambda (free tier), PostgreSQL gerenciado, Redis básico e EC2 t2.micro para EvolutionAPI.
  - Migração do frontend para VPS própria.
  - Integração de todos os fluxos de dados e automações, garantindo segurança, escalabilidade e baixo custo operacional.
- **Validação Técnica e de Produto:**  
  - Testes com usuários reais da periferia para ajustar linguagem, UX e funcionalidades.
  - Ajuste fino dos prompts e rotinas de IA com base no feedback.
- **Preparação de Material de Comunicação:**  
  - Criação de landing page, pitch deck e materiais para divulgação e captação de parceiros.

---

## 3. Segundo Trimestre (3-6 meses)

- **Lançamento Beta Controlado:**  
  - Liberação da plataforma para um grupo restrito de usuários, coletando métricas de uso, engajamento e retenção.
  - Monitoramento intensivo de custos, performance e escalabilidade da arquitetura serverless.
- **Ajustes Pós-Beta:**  
  - Iteração rápida com base no feedback dos primeiros usuários.
  - Implementação de melhorias sugeridas pelo especialista em endividamento.
- **Primeiras Parcerias Locais:**  
  - Contato com ONGs, coletivos periféricos e influenciadores para ampliação da base de testes e divulgação orgânica.

---

## 4. Terceiro Trimestre (6-9 meses)

- **Escala Inicial e Parcerias Estratégicas:**  
  - Início do processo para obtenção do Google for Startups, visando acesso a créditos em cloud e mentoria para aceleração do negócio.
  - Aproximação com o Sebrae para discutir integração do Desenrolai aos serviços de apoio a microempreendedores. Proposta de uso do sistema para cálculo do tempo estimado para sair do negativado, agregando valor aos programas de educação financeira do Sebrae.
- **Expansão da Base de Usuários:**  
  - Ações de marketing digital, eventos locais e campanhas com parceiros para alcançar mais comunidades periféricas.
- **Aprimoramento do Produto:**  
  - Lançamento das funcionalidades premium, incluindo agentes de consultoria, notificações e relatórios personalizados.

---

## 5. Quarto Trimestre e Pós-Lançamento (9-12 meses)

- **Lançamento Oficial:**  
  - Disponibilização do Desenrolai para o público geral, com suporte completo e funcionalidades premium ativas.
- **Monitoramento e Otimização Contínua:**  
  - Análise de métricas de impacto social, satisfação do usuário e viabilidade financeira.
  - Otimização de custos de infraestrutura e IA conforme crescimento da base.
- **Fechamento de Parcerias Estratégicas:**  
  - Consolidação da parceria com Sebrae e negociação com outras plataformas de educação e inclusão financeira.
  - Exploração de novos mercados e adaptação do roadmap para públicos específicos (ex: mulheres chefes de família, jovens empreendedores).

---

## 6. Estrutura de Produção e Tecnologias

<p style={{textAlign: 'center'}}>Figura 1 - Arquitetura de Produção</p>
<div style={{margin: 25}}>
    <div style={{textAlign: 'center'}}>
        <img src={require("../../static/img/arquitetura.png").default} style={{width: 800}} alt="Persona Jéssica Barros" />
        <br />
    </div>
</div>
<p style={{textAlign: 'center'}}>Fonte:  Material produzido pelos autores (2025)</p>

**Descrição da Arquitetura de Produção:**
- **Backend e agentes:** AWS Lambda (free tier), garantindo escalabilidade automática e custo quase zero no início.
- **EvolutionAPI e WhatsApp API:** Rodando em EC2 t2.micro, centralizando a comunicação.
- **Banco de dados:** PostgreSQL gerenciado, seguro e de fácil manutenção.
- **Redis:** Para histórico de conversas e sessões.
- **Frontend:** Hospedado em VPS própria, eliminando custos de SaaS.
- **Lambdas adicionais:** Usadas para envio de e-mails e agentes premium, também aproveitando o free tier.
- **Monitoramento e logs:** Ferramentas integradas para acompanhamento de performance e segurança.

Essa arquitetura foi escolhida para garantir baixo custo, alta disponibilidade e fácil escalabilidade, permitindo que a equipe foque no produto e no impacto social, sem se preocupar com custos fixos elevados ou complexidade operacional desnecessária.

---

## 7. Público Focal e Estratégia de Expansão

- **Foco inicial:** Adultos de baixa renda, moradores de periferias urbanas, trabalhadores informais e pequenos empreendedores.
- **Expansão:** Após validação, ampliar para outros segmentos vulneráveis (ex: mulheres chefes de família, jovens em busca do primeiro emprego, microempreendedores).
- **Parcerias:** ONGs, coletivos periféricos, Sebrae, plataformas de educação financeira e programas de aceleração.

---

## Considerações Finais

O roadmap pós-hackathon do Desenrolai prioriza a consolidação de uma equipe multidisciplinar, o desenvolvimento de uma arquitetura enxuta e escalável, a validação com o público-alvo real e a construção de parcerias estratégicas para garantir impacto social duradouro e sustentabilidade financeira.

---

## Referências

[1] SIMFORM. AWS Lambda Pricing: How Much it Costs to Run a Serverless Application. 2025. Disponível em: https://www.simform.com/blog/aws-lambda-pricing/. Acesso em: 20 jun. 2025.

[2] POSTGRESQL GLOBAL DEVELOPMENT GROUP. PostgreSQL. 2025. Disponível em: https://www.postgresql.org. Acesso em: 20 jun. 2025.

[3] BYTEPLUS. Billing items and prices--Cache for Redis-Byteplus. 2025. Disponível em: https://docs.byteplus.com/en/docs/redis/billing-item-price. Acesso em: 20 jun. 2025.

[4] GIST. Display the price summary of AWS EC2's spot instances across all regions and availability zones. 2025. Disponível em: https://gist.github.com/ikuyamada/364b29342a3dd14153eddbc6417543d8. Acesso em: 20 jun. 2025.
