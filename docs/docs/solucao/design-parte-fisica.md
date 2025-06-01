---
title: Desing parte física
sidebar_position: 3
---

# Desing parte física

## Resumo

&emsp;O design do Vaporaid é pensado para ser simples, funcional e sustentável. A estrutura física é primeiramente composta por um case externo, impresso em plástico PLA em uma impressora 3d. Sua forma cilíndrica é projetada para ser pouco intrusiva nos ambientes de uso, permitindo a incorporação no ambiente da casa sem chamar muita atenção.
<br />
&emsp;O case abriga os componentes eletrônicos, incluindo o atomizador e bateria de lítio reaproveitados de cigarros eletrônicos. A parte interna do Vaporaid é separada em dois compartimentos:
<ol>
<li>O primeiro, no espaço superior, abriga o atomizador e o algodão que retém a essência repelente. Um buraco no topo da case permite a passagem do vapor do repelente para o ambiente externo lentamente.</li>
<li>O segundo compartimento, na parte inferior, contém a bateria de lítio e o circuito eletrônico que controla o funcionamento do dispositivo</li>
</ol>

## Design do case

&emsp;A case do Vaporaid foi especialmente projetada para ser impressa para maximizar a eficiência do uso do material, do tempo de impressão e da funcionalidade do dispositivo. Utilizando de uma impressora 3D FDM, a case é desenhada para ser impressa em duas partes: A carcaça em sí, e divisória interna do reservatório de repelente.
&emsp;A parte superior da case (onde se encontram o atomizador e o algodão com repelente) é projetada com um furo no centro, permitindo a saída de vapor para o ambiente. Uma leve inclinação na parte superior impede a prisão do vapor no topo da case, garantindo que todo o vapor seja liberado corretamente. Além disso, a inclinação na parte superior também ajuda na hora da impressão, pois evita a necessidade de suportes para a peça, economizando tempo e material.

<p style={{textAlign: 'center'}}>Figura 1 - Case em visão superior</p>
<div style={{margin: 25}}>
    <div style={{textAlign: 'center'}}>
        <img src={require("../../static/img/case/3.png").default} style={{width: 800}} alt="Seção de boas vindas" />
        <br />
    </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Material produzido pelos autores (2025)</p>
<p style={{textAlign: 'center'}}>Figura 2 - Case invertida (sem divisória)</p>
<div style={{margin: 25}}>
    <div style={{textAlign: 'center'}}>
        <img src={require("../../static/img/case/1.png").default} style={{width: 800}} alt="Seção de boas vindas" />
        <br />
    </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Material produzido pelos autores (2025)</p>

&emsp;Além disso, a parte superior externa apresenta uma concavidade interna, visando reduzir a possibilidade de uso indevido do dispositivo, como por exemplo, uma possível sucção direta do vapor por crianças ou animais de estimação.

&emsp;A divisória interna da case foi pensada como uma forma de dividir o espaço interno do dispositivo, separando o atomizador e o algodão do sistema eletrônico. Um buraco no centro da peça permite que o atomizador seja encaixado na parte superior enquanto toda a fiação elétrica se encontra na parte inferior, com apenas os cabos do atomizador passando pela divisória. Com tolerâncias baixas entre as peças (&lt0.1mm) e o uso de materiais isolantes, a vedação entre os dois compartimentos, em nossos testes, se mostrou eficiente, sem vazamentos para a parte inferior.
