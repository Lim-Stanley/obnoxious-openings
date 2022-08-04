from bs4 import BeautifulSoup
import sys
import json

def removeMoveNumbers(s):
    s = list(s)
    indices = [i for i in range(len(s)) if s[i] == '.']
    indices.reverse()
    for index in indices:
        del s[index]
        del s[index - 1]
    return ''.join(s)

openings = {}
with open('openings.html', 'r') as html_text:
    soup = BeautifulSoup(html_text, 'lxml')
    opening_tags = soup.findAll('tr')
    for tag in opening_tags:
        columns = tag.findAll('div', class_ = 'yui-dt-liner')
        name = columns[0].text.strip()
        moves = columns[-1].text.strip()
        moves = removeMoveNumbers(moves).split()
        openings[name] = moves

sys.stdout = open('openings.js', 'w')
json_d = json.dumps(openings)
print(f'export const openings = {json_d}')