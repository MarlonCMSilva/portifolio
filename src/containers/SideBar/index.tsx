import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descrição, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Marlon Silva </Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        MarlonCMSilva
      </Paragrafo>
      <Descrição tipo="principal" fontSize={16}>
        Desenvolvedor Full-Stack Java
      </Descrição>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
