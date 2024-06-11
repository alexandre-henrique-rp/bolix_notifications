<h1>Bolix notifications serve 🏈</h1>

<p>
Esse é um servidor para tratar a notificação de pagamento Bolix da efi
</p>


<h5>check list</h5>
</br>
<ul>
<li>certificado efi</li>
<li>credenciais efi</li>
<li>install dependency package.json</li>
<li>configuração Nginx</li>
<li>Acesso Db</li>
</ul>
</br>
</br>

<h5>utilização</h5>
</br>
</br>
<ul style="list-style-type:number">
  <li><div>
  <p><b>Fazer o clone do repositório</b></p>

**terminal**

 ><code>git clone https://github.com/seunome/usuariorepositorio.git</code>

 ><code>cd usuariorepositorio</code>

  </div></li>
  <li><div>
  <div>
  <p><b>Instalar dependências</b></p>

**terminal**

 ><code>yarn</code>
 ><code>yarn audit fix --force </code>
 ><code>yarn outdated</code>
 ><code>yarn upgrade</code>
 ><code>yarn upgrade-interactive --latest</code>
 ><code>yarn upgrade</code>

ou

 ><code>npm i</code>
 ><code>npm audit fix --force </code>
 ><code>npm outdated</code>
 ><code>npm update</code>
 ><code>npm upgrade-interactive --latest</code>
 ><code>npm update</code>

  </div>
  </div></li>
  <li><div>
  <div>
  <p><b>Definir variáveis de ambiente</b></p>

**.env**

 ><em>
###### SERVER

>SERVE_PORT= <mark style="background-color: #ffea76; padding-inline: 5px">(porta de utilização do server)</mark>
>SERVE_CONSULT= <mark style="background-color: #ffea76; >padding-inline: 5px">(url de consulta)</mark></em>

><em>
  ###### PRODUÇÃO
  >CLIENT_ID= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  >CLIENT_SECRET= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  >CERT_USER= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  >SANDBOX= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  ></em>

  ><em>
  ###### HOMOLOGAÇÃO
  >CLIENT_ID= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  >CLIENT_SECRET= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  >CERT_USER= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  >SANDBOX= <mark style="background-color: #ffea76; padding-inline: 5px">(credenciais fornecidas pela Efi)</mark>
  ></em>

  </div>
  </div></li>
  <li>
  <div>
  <p><b>Configuração Nginx</b></p>

  copiar o arquivo de configuração de prox que esta na <em>./nginx/bolix_notifications</em>

  e adicionar em <em>/etc/nginx/sites-avalibes</em>
</div></li>
</ul>
