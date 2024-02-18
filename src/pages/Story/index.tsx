import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TaleTemplateCard from '../../components/TaleTemplateCard'

const teste =
  'Era noite de comemoração em Erenix, uma noite lembrada por todos como a grande revolução que levou um terrível ditador chamado Livoh a sua queda, e quando o bom homem Aslan Kansbar nos liderou para um futuro melhor Em algum lugar da grande cidadela de Erenix, as coisas estavam mais animadas, toda a família havia se reunido para comemorarem juntos, na lareira estava sentado um homem já bastante vivido, com sua grande barba grisalha, e um cachimbo em sua mão ele entretia os jovens sentados aos seus pés, animados com as histórias Vovô, me conta as suas histórias dos tempos antigos! -exclamava o pequeno Jimmy feliz- O senhor sorriu e lhe respondeu Claro meu pequeno, foram a muitos anos - ele se vira lentamente para olhar o fogo crepitando na lareira - Antes mesmo do nosso Grande Aslan ser rei, nestas terras haviam outros vilarejos, antes de sermos chamados de Erenix os antigos povos chamam essa terra de Galdravíddtar, eu até hoje não sei o que significa… parece ser uma língua a muito tempo esquecida - e o Jimmy o interrompe - Mas vovô você sabe de tuuuudinho que já existiu, se o senhor não sabe então nunca existiu - ele fala sorrindo com a cauda abanando um tanto quanto rápido de animação- -o senhor ri, afaga a cabeça do neto e volta a contar- Dizem, meu pequeno, que essa antiga terra era uma terra tão poderosa que não necessitava da crença de deuses, eles eram seus próprios deuses, existia uma antiga força vital neles o qual fluía uma espécie de magia antiga… Divina ouso dizer, que lhes dava uma série de benefícios, eles não morriam pelo envelhecimento e tampouco precisavam se alimentar como nós, bom, com o passar do tempo, houve uma tribo chamada Shitri, a qual ousou ir além e explorar o limiar entre a vida e a morte, eles foram os primeiros necromantes da história. Depois de muito anos experimentando e testando essa magia atualmente proibida resolveram fazer um ritual de invocação para invocar a morte, a subjugar e torná-los os detentores do poder da própria vida, porém, algo deu errado pois eles haviam conjurado algo que não poderiam deter eles convocaram o Sunaket, uma mítica criatura feita apenas de ossos de diversos seres vivos, se agrupam e formam um enorme humanóide que dizem as lendas sobrepassa o tamanho de montanhas as quais nunca chegamos ao topo, ele destruiu todos os antigos ritualistas de Shitri com apenas um golpe, criando até hoje uma enorme ravina com o impacto de seu punho no solo. E então ele estava solto, livre de um antigo aprisionamento o qual antecede até mesmo a vida no nosso mundo… -nesse momento eles escutam uma voz feminina vinda da cozinha- A janta está pronta meninos! - Ela aparece na porta que divide a cozinha pra sala, uma bela mulher, por volta de seus 25 anos com traços finos em seu rosto, cabelos morenos descendo pelos seus ombros e escondendo praticamente todo o seu pescoço, ela sorri - Papai… pare de assustar ele, não tem idade pra escutar essas suas histórias - Jimmy cruza os braços resmungando - Eu sou um homem já! - o velho ri passando a mão na cabeça do pequeno- Grandes homens nascem pequenos, Jimmy… E outra coisa, pra você crescer precisa comer, vamos jantar - ele fala se levantando da cadeira de madeira com dificuldade e indo para a cozinha junto com o pequeno Jimmy que ainda pensava sobre aquele antigo povo e esse monstro mítico que estava solto… Será que ele foi derrotado? Ele não sabe dizer, somente lhe resta esperar se seu avô contará a continuação Jimmy Torunn'

// Por aqui a conexão db e um filtro para
// Essa pagina é a historia principal, criar uma entrada para ela, e tambem a visualização de paginas,
// a visualização de paginas deve ser pela conexão db enviando a pagina pro useparams no taletemplatecard
const Story = () => {
  return (
    <>
      <Header current="story" />
      {/* <TaleTemplateCard author="Loki" tale={teste} title="ERENIX TESTE" /> */}
      <Footer />
    </>
  )
}

export default Story
