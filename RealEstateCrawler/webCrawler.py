import requests # type: ignore
from bs4 import BeautifulSoup # type: ignore
import json


def obter_conteudo(url):
    response = requests.get(url)

    if response.status_code == 200:
        return response.text
    else:
        print(f"Falha na requisição para {url}: {response.status_code}")
        return None


def extrair_dados(conteudo_html):
    soup = BeautifulSoup(conteudo_html, 'html.parser')

    divs_imoveis = soup.find_all('div', class_='div-block-13')
    dados_imoveis = []



    for div in divs_imoveis:
        titulo = div.find('div', class_='heading-4').get_text(strip=True) if div.find('div',
                                                                                      class_='heading-4') else 'Não disponível'
        localizacao = div.find('div', class_='text-block-15').get_text(strip=True) if div.find('div',
                                                                                               class_='text-block-15') else 'Não disponível'
        referencia = div.find('div', class_='text-block-14').get_text(strip=True) if div.find('div',
                                                                                              class_='text-block-14') else 'Não disponível'
        preco = div.find('div', class_='text-block-11').get_text(strip=True) if div.find('div',
                                                                                         class_='text-block-11') else 'Não disponível'

        dados_imoveis.append({
            'titulo': titulo,
            'localizacao': localizacao,
            'referencia': referencia,
            'preco': preco,
        })

    return dados_imoveis


def processar_sites(urls, arquivo_json):
    todos_dados_imoveis = []

    for url in urls:
        conteudo_html = obter_conteudo(url)

        if conteudo_html:
            dados_extraidos = extrair_dados(conteudo_html)

            todos_dados_imoveis.extend(dados_extraidos)
            print(f"Dados extraídos da página: {url}")

    with open(arquivo_json, 'w', encoding='utf-8') as f:
        json.dump(todos_dados_imoveis, f, ensure_ascii=False, indent=4)

    print(f"Todos os dados exportados para {arquivo_json}")


urls = [
]

arquivo_json = 'imoveis_extraidos.json'

processar_sites(urls, arquivo_json)
