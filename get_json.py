import json
import time
from crud import add_person

PATH = 'db.json'


while True:
    f = open(PATH)
    dict = json.load(f)
    if dict["chars"][0]:
        if dict["chars"][0]["action"] == 'ADD':
            add_person(dict["chars"][0]["JSONkey"], dict["chars"][0]["name"], dict["chars"][0]["salary"], int(dict["chars"][0]['isPromote']))
        dict["chars"].pop(0)
        text = str(dict).replace('\'','\"').replace('False', '0').replace('True', '1')

        f.close()
        f = open(PATH, 'w')
        f.write(text)
    f.close()
    time.sleep(5)