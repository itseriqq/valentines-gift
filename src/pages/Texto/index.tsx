import { useState } from 'react';



const Texto = () => {

    const [image, setImg] = useState(true);

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-8xl mb-4 font-bold text-neutral-800 dark:text-white max-w-xl mx-auto text-center">
                Carolina,
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                É com muito prazer que digo que estamos passando nosso primeiro dia dos namorados juntos e, pra isso, quis eternizar em um website (ou até o site cair ou começarem a cobrar) esse dia.
                Pensei, de certa forma, em cima da hora nesse presente, mas foi por imaginar que você gostaria de ter algo assim associado à nós. Então, sentei e fui procurar componentes que pudessem ser utilizados no processo. Eu quis compartilhar cada detalhe do processo com você, em cada uma das etapas, porque é justamente isso que faz eu me apaixonar todos os dias por ti.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                A sensação de poder compartilhar a minha vida, os meus projetos, as minhas ideias, angústias, alegrias contigo e saber que você também vive elas comigo, me faz querer buscar por mais e mais experiências. Sentir que a vida ao seu lado tem sido fascinante, me deixa feliz em pensar que ainda há tanto por vir.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                E, com um sorriso no rosto, pude montar cada parte desse presente, revivendo nossas fotografias, enquanto baixava uma a uma. Eu as converti para .jpg (algumas estavam quebrando ao baixar do Drive), comprimi cada uma com um script que criei usando o ChatGPT rapidamente ao invés de usar o LovePDF que não permitia converter mais de 30 arquivos por vez além de ter anúncios a cada conversão. E foi esse o resultado que espero que goste. Pude olhar a ordem cronológica dos nossos passeios de forma clara e poder dar sorrisos relembrando as cenas. Relembrei cada momento que tive o prazer de tirar o celular do bolso pra poder registrar parte dos dias tão bons ao seu lado. Eternizamos, na fotografia, nossas memórias. É bonito poder revê-las e saber que terão tantas outras tantas pela frente.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                A vida ao seu lado criou costume. O costume da beleza, da leveza, da pureza, da cumpricidade, da amizade e do amor. Sinto paixão e alegria compartilhando minha felicidade com você. E, ainda mais, sou feliz presenciando a sua felicidade ao teu lado.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                Apoiarei-te em cada passo da vida com meu corpo e alma, vendo suas conquistas ao seu lado, vibrando por cada uma delas.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                Eu te amo.
                Feliz dia dos namorados, Carolina.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8">
                Com amor,
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto">
                Erick 💗
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-xl text-justify mx-auto mt-8 italic">
                Escrito em 10 de junho de 2024.
            </p>
            {image && (
                <div className='mx-auto flex items-center justify-center'>
                    <button className='cursor-pointer' onClick={() => setImg(!image)}>
                        <img className="w-[400px] h-[520px] mt-8 rounded-md" src="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG-20231021-WA0029.jpg?alt=media&token=a5cd1e2a-66cd-4a35-8325-415ea21eb7d3" alt="Minha companhia favorita" />
                    </button>
                </div>
            )}

            {!image && (
                <div className='mx-auto flex items-center justify-center'>
                    <button className='cursor-pointer' onClick={() => setImg(!image)}>
                        <div className="w-[400px] h-[520px] mt-8 rounded-md bg-gray-50">
                            <div className="flex items-center justify-center flex-col h-full">
                                <p className="text-gray-500 text-lg">É bom demais viver essa vida com você,</p>
                                <p className="text-gray-500 text-lg">minha dedinho nervoso clica-clica hehehe.</p>
                                <p className="text-gray-500 text-lg mt-8">Eu te amo.</p>
                                <p className="text-gray-500 text-lg">Assinado por: Erick 💗</p>
                            </div>
                        </div>
                    </button>
                </div>
            )}
        </div>

    )
}

export default Texto