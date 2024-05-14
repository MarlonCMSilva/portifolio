import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellat,
      quis ab fuga commodi asperiores, molestias quo quasi exercitationem eos
      soluta! Quidem totam veniam molestiae, suscipit natus cum nam eos?
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=USUARIO&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarlonCMSilva&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
