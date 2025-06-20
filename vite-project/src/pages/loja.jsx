import React, { useState, useEffect } from "react";
import styles from "./loja.module.css";

export default function LojaAcenis() {
  const [depoimentoAtivo, setDepoimentoAtivo] = useState(0);

  const depoimentos = [
    {
      nome: "Ana Souza",
      cidade: "São Paulo - SP",
      estrelas: 5,
      texto:
        "A loja é maravilhosa, os brinquedos são muito educativos e meu filho amou cada item. Parabéns pela proposta!",
      imagem: "src/assets/img/mulher1.jpg",
    },
    {
      nome: "Carlos Lima",
      cidade: "Recife - PE",
      estrelas: 4,
      texto:
        "Achei a curadoria dos produtos muito sensível. O livro que comprei ajudou muito na alfabetização da minha filha!",
      imagem: "src/assets/img/homem1.jpg",
    },
    {
      nome: "Juliana Martins",
      cidade: "Belo Horizonte - MG",
      estrelas: 5,
      texto:
        "Os brinquedos são incríveis! Minha filha com SD está super engajada com os jogos de formas e cores.",
      imagem: "src/assets/img/mulher2.jpg",
    },
    {
      nome: "Rafael Torres",
      cidade: "Porto Alegre - RS",
      estrelas: 3,
      texto:
        "Gostei dos produtos, mas a entrega demorou um pouco mais do que o esperado. No geral, boa experiência.",
      imagem: "src/assets/img/homem2.jpg",
    },
    {
      nome: "Patrícia Oliveira",
      cidade: "Salvador - BA",
      estrelas: 5,
      texto:
        "A proposta da loja é linda! Tudo muito bem pensado para o desenvolvimento das nossas crianças. Voltarei a comprar!",
      imagem: "src/assets/img/mulher3.jpg",
    },
    {
      nome: "Eduardo Nunes",
      cidade: "Curitiba - PR",
      estrelas: 4,
      texto:
        "Gostei muito dos livros didáticos. Didáticos e acessíveis. Minha sobrinha está adorando!",
      imagem: "src/assets/img/homem3.jpg",
    },
    {
      nome: "Fernanda Ribeiro",
      cidade: "Fortaleza - CE",
      estrelas: 5,
      texto:
        "Estou encantada com os brinquedos! Tudo com qualidade, cores vibrantes e muita utilidade no dia a dia.",
      imagem: "src/assets/img/mulher4.jpg",
    },
    {
      nome: "Lucas Ferreira",
      cidade: "Brasília - DF",
      estrelas: 4,
      texto:
        "Muito bom encontrar uma loja que pensa com tanto carinho nas crianças com SD. Faltam mais iniciativas assim!",
      imagem: "src/assets/img/homem4.jpg",
    },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDepoimentoAtivo((prev) => (prev + 1) % depoimentos.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [depoimentos.length]);

  return (
    <div className={styles.lojaContainer}>
      {/* Banner */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerWelcome}>BOAS-VINDAS À LOJA ACENIS!</span>
            <h1 className={styles.bannerTitle}>
              Brinquedos e livros pensados para <br />
              crianças com síndrome de Down
            </h1>
            <p className={styles.bannerSubtitle}>
              Itens que estimulam o desenvolvimento, a <br />
              criatividade e a diversão de forma inclusiva e <br />
              carinhosa.
            </p>
          </div>
        </div>

        <div className={styles.bannerCards}>
          <div className={styles.bannerCard}>
            <div className={styles.cardIcon}>
              <img src="src/assets/img/urso.png" alt="Urso" />
            </div>
            <p className={styles.cardTitle}>
              Itens selecionados para estimular o desenvolvimento.
            </p>
          </div>
          <div className={styles.bannerCard}>
            <div className={styles.cardIcon}>
              <img src="src/assets/img/caixa.png" alt="Caixa" />
            </div>
            <p className={styles.cardTitle}>
              Categorias para todas as idades e fases.
            </p>
          </div>
        </div>
      </section>

      {/* Título e filtros */}
      <section className={styles.produtosSection}>
        <h2 className={styles.produtosTitulo}>LOJA ACENIS</h2>
        <p className={styles.produtosSubtitulo}>
          Aqui você encontra produtos especialmente selecionados para o desenvolvimento e bem-estar dos pequenos.
        </p>

        <div className={styles.filtros}>
          <button className={styles.filtroAtivo}>Todos os Produtos</button>
          <button className={styles.filtro}>Brinquedos</button>
          <button className={styles.filtro}>Livros</button>
          <button className={styles.filtro}>Camisetas</button>
        </div>

        {/* Cards de produto */}
        <div className={styles.produtosGrid}>
          {/* Produto 1 */}
          <a href="https://www.rihappy.com.br/quebra-cabeca-vincent-van-gogh-a-noite-estrelada-1000-pecas-game-office-toyster/p" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.cardProduto}>
              <img src="src/assets/img/quebra1.jpg" alt="Produto 1" className={styles.produtoImagem} />
              <h3 className={styles.produtoNome}>Quebra Cabeça - A Noite Estrelada - 1000 Peças</h3>
              <div className={styles.estrelas}>⭐⭐⭐⭐☆</div>
              <p className={styles.produtoPreco}>R$ 58,99</p>
              <p className={styles.produtoParcela}>ou 3x de R$ 19,66</p>
              <p className={styles.produtoVendedor}><span className={styles.verificadoIcon}>✔</span> vendido por RiHappy</p>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="https://www.magazineluiza.com.br/brinquedo-livro-eletronico-infantil-inteligente-didatico-portugues-ingles-toy-king/p/ek7j1caj6j/li/lltj" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.cardProduto}>
              <img src="src/assets/img/livro.jpg" alt="Produto 2" className={styles.produtoImagem} />
              <h3 className={styles.produtoNome}>Livro Didático Eletrônico - Português Inglês</h3>
              <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
              <p className={styles.produtoPreco}>R$ 79,90</p>
              <p className={styles.produtoParcela}>ou 2x de R$ 39,95</p>
              <p className={styles.produtoVendedor}><span className={styles.verificadoIcon}>✔</span> vendido por MagazineLuiza</p>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="https://produto.mercadolivre.com.br/MLB-1757118294-brinquedo-educativo-pirmides-encaixar-formas-geometricas-_JM" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.cardProduto}>
              <img src="src/assets/img/formas.jpg" alt="Produto 3" className={styles.produtoImagem} />
              <h3 className={styles.produtoNome}>Brinquedo Educativo - Encaixar Formas Geométricas</h3>
              <div className={styles.estrelas}>⭐⭐⭐⭐☆</div>
              <p className={styles.produtoPreco}>R$ 42,41</p>
              <p className={styles.produtoParcela}>ou 2x de R$ 21,20</p>
              <p className={styles.produtoVendedor}><span className={styles.verificadoIcon}>✔</span> vendido por MercadoLivre</p>
            </div>
          </a>

          {/* Produto 4 */}
          <a href="https://www.amazon.com.br/Multiplicando-Matem%C3%A1tica-GGB-Plast-1043/dp/B0B1N7XTN8/ref=sr_1_10?adgrpid=1147890855170570&dib=eyJ2IjoiMSJ9.RyvRi6IGSlyZYcBltQn9y7OWbFTxWwQzg5fRnEHIlY5OVpebf0ldhB_lLo8NFKhpqjNTUaklnG_txYp4OjVhFRRGcZy6Pl0kTUCtQRvEGF91Kxh_lmOJ95ivPVQhLCO_XWESFPVd3te6cl7Guz9RC2muVcVdv5GRmn20bwXL0Iqv4j_qhqBL2EWGxWSOucSgXITOKe1K3TYScG1krQlqFy15-IRcsXOdxQ5La_hGLXN2OPe7rcLmLd89i70adowXuo8s3vmNcCOwuCi7OrsurZqZKTlU25AuLUbQfTVWelA.3eVHdStwIOWs3pdFoLxbo8uDI6FgQYGDcMHa2bTUBws&dib_tag=se&hvadid=71743272086917&hvbmt=be&hvdev=c&hvlocphy=116068&hvnetw=o&hvqmt=e&hvtargid=kwd-71743758038046%3Aloc-20&hydadcr=26436_11599404&keywords=brinquedos+matem%C3%A1tica&mcid=303953e8af323fd88a0015e1e325464f&qid=1750452659&sr=8-10&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.cardProduto}>
              <img src="src/assets/img/matematica.jpg" alt="Produto 4" className={styles.produtoImagem} />
              <h3 className={styles.produtoNome}>Jogo Tabuada Multiplicando e Dividindo - Matemática</h3>
              <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
              <p className={styles.produtoPreco}>R$ 39,90</p>
              <p className={styles.produtoParcela}>ou 2x de R$ 19,95</p>
              <p className={styles.produtoVendedor}><span className={styles.verificadoIcon}>✔</span> vendido por Amazon</p>
            </div>
          </a>

          {/* Produto 5 */}
          <a href="https://produto.mercadolivre.com.br/MLB-1874498958-jogo-da-memoria-animais-e-filhotes-infantil-educativos-40-pc-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.cardProduto}>
              <img src="src/assets/img/memoria.png" alt="Produto 5" className={styles.produtoImagem} />
              <h3 className={styles.produtoNome}>Jogo da Memória Animais - 40 Peças</h3>
              <div className={styles.estrelas}>⭐⭐⭐⭐⭐</div>
              <p className={styles.produtoPreco}>R$ 37,90</p>
              <p className={styles.produtoParcela}>ou 2x de R$ 18,95</p>
              <p className={styles.produtoVendedor}><span className={styles.verificadoIcon}>✔</span> vendido por MercadoLivre</p>
            </div>
          </a>

          {/* Produto 6 */}
          <a href="https://www.americanas.com.br/quebra-cabeca-infantil-grandao-turma-da-monica-48-pecas-toyster-2603660497/p" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.cardProduto}>
              <img src="src/assets/img/quebra2.png" alt="Produto 6" className={styles.produtoImagem} />
              <h3 className={styles.produtoNome}>Quebra Cabeça Turma da Mônica - 48 Peças</h3>
              <div className={styles.estrelas}>⭐⭐⭐⭐☆</div>
              <p className={styles.produtoPreco}>R$ 86,99</p>
              <p className={styles.produtoParcela}>ou 2x de R$ 43,49</p>
              <p className={styles.produtoVendedor}><span className={styles.verificadoIcon}>✔</span> vendido por Americanas</p>
            </div>
          </a>
        </div>
      </section>

      {/* Banner decorativo acima dos feedbacks */}
      <div className={styles.bannerFeedback}></div>

      {/* Seção de Feedbacks */}
      <section className={styles.feedbackSection}>
        <h2 className={styles.feedbackTitulo}>Feedbacks</h2>

        <div className={styles.feedbackWrapper}>
          <div className={styles.feedbackCard}>
            <div className={styles.feedbackCardHeader}>
              <div className={styles.fotoCliente}>
                <img
                  src={depoimentos[depoimentoAtivo].imagem}
                  alt={depoimentos[depoimentoAtivo].nome}
                />
              </div>
              <div className={styles.feedbackInfo}>
                <p className={styles.nomeCliente}>
                  {depoimentos[depoimentoAtivo].nome}
                </p>
                <div className={styles.estrelas}>
                  {"⭐".repeat(depoimentos[depoimentoAtivo].estrelas)}
                </div>
              </div>
              <div className={styles.cidadeCliente}>
                {depoimentos[depoimentoAtivo].cidade}
              </div>
            </div>
            <p className={styles.depoimento}>
              {depoimentos[depoimentoAtivo].texto}
            </p>
          </div>

          <div className={styles.bolinhas}>
            {depoimentos.map((_, index) => (
              <span
                key={index}
                onClick={() => setDepoimentoAtivo(index)}
                className={`${styles.bolinha} ${
                  depoimentoAtivo === index ? styles.ativa : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}