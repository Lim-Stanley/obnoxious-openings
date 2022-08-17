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
        if index - 2 > 0 and s[index - 2].isnumeric():
            del s[index - 2]
    s = ''.join(s).split()
    for i, move in enumerate(s):
        if i == len(s) - 1:
            break
        if len(move) == 4 and not (move[1] == 'x' or move[1] == '-'):
            s[i] = move[0] + move[2:]
        if move[-1] == '+':
            s[i] = move[:-1]
    return s

openings = {}
with open('openings.html', 'r') as html_text:
    soup = BeautifulSoup(html_text, 'lxml')
    opening_tags = soup.findAll('tr')
    for tag in opening_tags:
        columns = tag.findAll('div', class_ = 'yui-dt-liner')
        name = columns[0].text.strip()
        moves = columns[-1].text.strip()
        openings[name] = removeMoveNumbers(moves)

sys.stdout = open('openings.js', 'w')
json_d = json.dumps(openings)
print(f'export const openings = {json_d}')