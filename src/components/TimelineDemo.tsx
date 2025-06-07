import { Timeline } from "@/components/ui/Timeline";
import { TiltSpotlight } from "./TiltCard";

export default function TimelineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-8">
            Espero que goste :p
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TiltSpotlight title={"Festinha"} subtitle={"A primeira festinha que fomos juntos e tiramos várias fotos."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9073.jpg?alt=media&token=e21f22ed-bd3d-4b37-b369-c475e8715443" />
            <TiltSpotlight title={"Observatório Ibirapuera"} subtitle={"Foi um dia incrível que vimos muitas estrelas (duas vezes seguidas)."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_3219.jpg?alt=media&token=f2d29537-4c20-426b-ac4d-a63a3d518db3" />
            <TiltSpotlight title={"Parque Ibirapuera"} subtitle={"Era um dia ensolarado e estavamos bem debaixo da barra de exercícios!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_3242.jpg?alt=media&token=be7e84e4-4aac-4653-b2a0-2fe4255b700c" />
            <TiltSpotlight title={"Pavilhão Japonês"} subtitle={"Passamos uma tarde assistindo carpinhas nadando no lago."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4393.jpg?alt=media&token=d9ae2f45-7747-42f2-a9de-fbbab25d83fd" />
            <TiltSpotlight title={"Sesc Paulista"} subtitle={"Fomos nossa segunda vez ao mirante."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_2149.jpg?alt=media&token=51106de2-d8b9-4ea9-a4fa-4d2b911acdaf" />
            <TiltSpotlight title={"Festinha"} subtitle={"Outra vez da nossa primeira festinha."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9079.jpg?alt=media&token=3132f371-e34a-41ec-b6ae-c8b1ef56c06f" />
            <TiltSpotlight title={"Favorita"} subtitle={"Um fim de tarde na Paulista que rendeu a minha primeira foto de wallpaper nossa."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG-20231021-WA0029.jpg?alt=media&token=a5cd1e2a-66cd-4a35-8325-415ea21eb7d3" />
            <TiltSpotlight title={"AnimeFest"} subtitle={"Nosso primeiro evento Geek juntos que compramos várias coisinhas."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1500.jpg?alt=media&token=7ac17c46-ccb5-47f3-ac7a-60fc780d9929" />
            <TiltSpotlight title={"AnimeFest"} subtitle={"Estavámos indo ao AnimeFest (ou voltando)."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1580.jpg?alt=media&token=ff250bbe-14c0-4376-8aa3-8365d0bff2fe" />
            <TiltSpotlight title={"AnimeFest"} subtitle={"Estavámos indo ao AnimeFest (ou voltando). - sim, outra KKKKK"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1584.JPG?alt=media&token=007b4951-b74c-4099-8353-273567951849" />

          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TiltSpotlight title={"Museu do Ipiranga"} subtitle={"Nossa primeira ida ao Museu do Ipiranga. (que podemos fazer de novo)"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8799.jpg?alt=media&token=c7074b53-960f-4df7-a49a-3377fed6caba" />
            <TiltSpotlight title={"O Seu Sorriso"} subtitle={"O sorriso mais encantador que já encontrei e que toma conta de todo o meu amor."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8937.jpg?alt=media&token=916ca25b-6006-4e9d-8658-73eae11001e7" />
            <TiltSpotlight title={"Um lanchinho"} subtitle={"Lanche bem delícia depois do Museu do Ipiranga."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8994.jpg?alt=media&token=32016ab9-6e2e-40d0-9cfb-763b24140812" />
            <TiltSpotlight title={"Uma conquista"} subtitle={"Minha primeira conquista material e você estava me apoiando desde o primeiro centavo."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9611.jpg?alt=media&token=8185115d-dfc9-470c-971c-1d2530fb4306" />
            <TiltSpotlight title={"Primeira gameplay"} subtitle={"A primeira vez que você jogou no computador novo assim que ele chegou."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9620.jpg?alt=media&token=b61edd46-0f44-4099-90a7-0a3c141fd7c9" />
            <TiltSpotlight title={"Webcam"} subtitle={"Nossa primeira foto em uma webcam juntos."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9690.jpg?alt=media&token=9de020d8-b263-4a14-af6d-b359b0f4b9c4" />
            <TiltSpotlight title={"Parque Maeda"} subtitle={"Nossa foto favorita no jardim japonês do Parque Maeda."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9277.jpg?alt=media&token=c88cf961-d4f0-44af-8b4f-e1e618e38daa" />
            <TiltSpotlight title={"Planeta Inseto"} subtitle={"Um dia que pegamos vários insetinhos diferentes na mão."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4461.jpg?alt=media&token=fd34b836-e1a0-4db2-8a48-958b19cb6608" />
            <TiltSpotlight title={"Primeira guerra"} subtitle={"Quando fomos pra guerra (paintball) e ficamos roxos por alguns dias."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4758.jpg?alt=media&token=5d2687a0-986a-459e-82d3-75e93677cc2a" />
            <TiltSpotlight title={"Uma festa"} subtitle={"Fomos à nossa segunda festa da faculdade juntos, dessa vez a gente foi pra vender comida, mas aproveitamos um pouco."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_5263.jpg?alt=media&token=87a55969-c3a4-4d0b-9cb5-8d6008bcb881" />
            <TiltSpotlight title={"Sua felicidade"} subtitle={"Essa só coloquei pra te lembrar que amo te ver feliz. Quero te ver assim sempre. Pra sempre."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_6167.jpg?alt=media&token=fc3b6b36-9d03-4f90-bdc0-3f1700a63f97" />
            <TiltSpotlight title={"Você me incentivando"} subtitle={"Você ficando feliz com o resultado da Plimpo, criando sua conta pela milésima vez nos meus testes. Te amo."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_6376.jpg?alt=media&token=af19d087-d67c-4c29-a58b-6d986a5736ee" />
            <TiltSpotlight title={"Com família"} subtitle={"Nosso primeiro passeio em família, que você usou a camisetinha do snuuuuuupii."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7020.jpg?alt=media&token=e394ee3f-71da-4c38-b3a9-225b417ddf57" />
            <TiltSpotlight title={"Tardezinha"} subtitle={"Estávamos curtindo uma piscininha aquecida nesse dia."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7036.jpg?alt=media&token=bc2121a1-9edc-4863-b395-1bbc56798799" />
            <TiltSpotlight title={"Primeira Sinuca"} subtitle={"Nossa primeira vez jogando sinuca juntos e mostrando performanace máxima (ou quase KKKKKK)."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7045.jpg?alt=media&token=99134534-108c-46a0-acad-b3293b01a7fd" />
            <TiltSpotlight title={"Foto favorita"} subtitle={"Minha foto favorita do nosso dia aproveitando naquela tarde."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7089.jpg?alt=media&token=c2de1a58-213f-4d4d-b391-3564ec93b2e6" />
            <TiltSpotlight title={"Primeira BGS"} subtitle={"Nosso segundo evento Geek, indo a BGS dessa vez e jogando juntos."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8054.jpg?alt=media&token=9191c6a2-6b8f-4d1a-bd89-1638fd3eb7a0" />
            <TiltSpotlight title={"Minha Gamer"} subtitle={"Você mostrando ser a melhor gamer que o mundo já viu, minha ídola e tudo que há de melhor nesse mundo."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8061.jpg?alt=media&token=e9fa4e9f-f50c-4bb8-b616-c38cc102bc80" />
            <TiltSpotlight title={"Nois"} subtitle={"Nois de fone grande na BGS."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8067.jpg?alt=media&token=3a1c45df-519e-4713-954f-e4a932ae4884" />
            <TiltSpotlight title={"BGS"} subtitle={"Mais fotinhos na BGS (esse dia foi muito bom)."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8094.jpg?alt=media&token=49d7450c-440c-4a5b-a556-6578b7bf2b89" />
            <TiltSpotlight title={"Museu do Ipiranga"} subtitle={"Mais fotinho no Museu do Ipiranga, na escadaria da riqueza."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8827.jpg?alt=media&token=09b9713d-feb0-4fb1-8577-69ffb5b50bbd" />
            <TiltSpotlight title={"Lindos"} subtitle={"Todos com inveja porque estávamos roubando a cena de tão lindos!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8862.jpg?alt=media&token=e0a80a17-c5ea-4c1d-9ee6-876fd1ff7912" />
            <TiltSpotlight title={"Jardim do Museu"} subtitle={"A gente tirando fotinhas virados para o jardim do Museu do Ipiranga."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8911.jpg?alt=media&token=f31d7d3a-1d42-4863-8601-d7296f7a2bc4" />
            <TiltSpotlight title={"Coisa linda"} subtitle={"Mais uma captura do meu sorriso favorito."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8935.jpg?alt=media&token=49e14f4d-68a7-4b41-b5bf-ebe94dd6a890" />
            <TiltSpotlight title={"Minha musa"} subtitle={"A mulher mais linda que já pisou nessa terra. Pra todo o sempre!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8942.jpg?alt=media&token=fcb464e2-bc2c-4bc8-8c49-b2fdf10e3418" />
            <TiltSpotlight title={"OLHA QUE ESPETÁCULO"} subtitle={"Mulher linda formidável tudo di bão, você é impressionante!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8976.jpg?alt=media&token=a472153a-9f2e-480a-8675-a281937326bf" />
            <TiltSpotlight title={"Companhia Favorita"} subtitle={"Nossa primeira ida ao médico, quando eu havia ficado doente por conta do ar condicionado do estágio."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/D2C0E111-5816-4BB6-9AD0-FF9F29034298.jpg?alt=media&token=4750c2eb-0c65-4bad-a24d-dd61e75118dc" />
            <TiltSpotlight title={"Passeiozinho"} subtitle={"Indo fazer entrega com meus pais na cidade que esqueci o nome (me lembre), e paramos pra almoçar na estrada."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7289.jpg?alt=media&token=9dce7d47-ee6e-49d7-83af-2101cb435d48" />
            <TiltSpotlight title={"Lanchezão"} subtitle={"Nossa foto com os lanches maravilhosos daquela praça de Food Trucks."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8994.jpg?alt=media&token=32016ab9-6e2e-40d0-9cfb-763b24140812" />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-4">
           Um ano com vários passeios legais juntos.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <TiltSpotlight title={"Candlelight do Bruno Mars"} subtitle={"Nossa ida ao Candlelight do Bruninho. Nosso 'segundo' dia. Dia 30!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1662.JPG?alt=media&token=35fd6ccd-87aa-476d-898c-e562ac779927" />
            <TiltSpotlight title={"Eu te amo, Carolina"} subtitle={"Obrigado por todas esses experiências juntos."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1736.JPG?alt=media&token=3a4469aa-488c-45d0-a7fb-76dd6cfc21de" />
            <TiltSpotlight title={"Animália"} subtitle={"Nossa primeira 'caverna' que até hoje não sei se era fake, juntos."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/2f7cebcf-ab47-4978-baa4-d2c935570870.jpg?alt=media&token=a77f7a15-0c03-4f97-b3a3-eace3f5ce6ef" />
            <TiltSpotlight title={"Lindos brilhantes"} subtitle={"Essa foto tá muito linda! Mais uma foto no Candlelight."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1746.JPG?alt=media&token=b499592b-7fc3-4996-95e3-bb507b6d8c04" />
            <TiltSpotlight title={"Prédios de Rico"} subtitle={"Você me acompanhou pra fazer gravações pra Where2GO e foi uma tarde muito especial - com um certo perrengue pra gravar."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_2361.jpg?alt=media&token=5006b344-8396-4373-9368-333640d4dbaf" />
            <TiltSpotlight title={"Churrasquinho"} subtitle={"Nosso primeiro churrasquinho na gráfica e aniversário da família juntos."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1895.JPG?alt=media&token=628ca711-0020-40ba-a9ee-f6455125b28b" />
            <TiltSpotlight title={"Casamento"} subtitle={"Fotinho no casamento na minha segunda ida à Saint Peter."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1403.JPG?alt=media&token=18b53303-43d2-470e-b0c4-6fc098961fef" />
            <TiltSpotlight title={"Montanha-Russa"} subtitle={"Nois na escadaria do Hopi-Hari bem cansados de um dia incrível."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1110.JPG?alt=media&token=bec0d0a8-244c-48e3-8ead-d6989b036d59" />
            <TiltSpotlight title={"Minha lindeza"} subtitle={"Você bem linda enquanto assistíamos a Dani pulando."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1018.JPG?alt=media&token=07a7f337-2378-4de9-9136-ec312a576266" />
            <TiltSpotlight title={"Nós"} subtitle={"NOIIIssss bem lindões, essa virou minha foto favorita (entre tantas favoritas)."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1004.JPG?alt=media&token=2512ce0a-c8b2-4153-abe9-65e3756860da" />
            <TiltSpotlight title={"Riozinho"} subtitle={"Foto virados pro riozinho do Hopi-Hari."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0999.JPG?alt=media&token=c1edee0a-b45d-4aeb-b6bb-d9d6e2bb89fe" />
            <TiltSpotlight title={"Os portões vão abrir"} subtitle={"Esperando o portão do Hopi-Hari para que começassemos nosso dia de adrenalina."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0966.JPG?alt=media&token=0cd3e7f4-308c-48ab-90ab-6115077c7ffe" />
            <TiltSpotlight title={"Doguinho"} subtitle={"Você brincando com o doguin quando estávamos na loja de pinga buscando presente pros meus pais."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0489.JPG?alt=media&token=597a844d-a589-415d-8ad1-5d4f2e440fe0" />
            <TiltSpotlight title={"Banquinho da praça"} subtitle={"Fotinho em frente à uma Igreja em Águas de São Pedro. Essa praçinha tava muito boa na sua companhia!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0446.JPG?alt=media&token=904df37b-5f91-4348-9b43-c8b3acc23ec5" />
            <TiltSpotlight title={"Mirante de Saint Peter"} subtitle={"Minha primeira subida à Serra de São Pedro quando tiramos foto lá de cima!"} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0282.JPG?alt=media&token=37eca9a3-1a80-4013-a5ed-51e890563b2e" />
            <TiltSpotlight title={"Mais do Mirante"} subtitle={"Tava bastante vento lá em cima! Amei esse passeio com você e sua família."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0272.JPG?alt=media&token=847397c0-06c6-4da5-b6c5-93d4f0e92b00" />
            <TiltSpotlight title={"Lindos"} subtitle={"A gente posando pra foto em São Pedro."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0265.JPG?alt=media&token=f53ed8ce-e9ed-4b4d-9440-b001da23fc45" />
            <TiltSpotlight title={"Primeira Adrenalina"} subtitle={"Nosso primeiro parque de diversões (foi no Animália) e fomos no brinquedo das motinhos que rodavam muito."} image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0154.JPG?alt=media&token=70926bef-3741-4984-ba82-67a81a1f3304" />

          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full ">
      <div className="top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
