from bs4 import BeautifulSoup
import requests

with open('openings.html', 'r') as html_text:
    soup = BeautifulSoup(html_text, 'lxml')
    opening_tags = soup.findAll('tr')
    for tag in opening_tags:
        columns = tag.findAll('div', class_ = 'yui-dt-liner')
        name = columns[0].text.strip()
        moves = columns[-1].text.strip()