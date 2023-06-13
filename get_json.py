import json
import time
from crud import add_person, delete_person, promote_person

PATH = 'db.json'


while True:
    f = open(PATH)
    dict = json.load(f)
    if not (dict["chars"] is []):
        if dict["chars"][0]["action"] == 'ADD':
            add_person(dict["chars"][0]["JSONkey"], dict["chars"][0]["name"], dict["chars"][0]["salary"], int(dict["chars"][0]['isPromote']))
        elif dict["chars"][0]["action"] == 'DELETE':
            delete_person(dict["chars"][0]["JSONkey"])
        elif dict["chars"][0]["action"] == 'PROMOTE':
            promote_person(dict["chars"][0]["JSONkey"], int(dict["chars"][0]['isPromote']))


        dict["chars"].pop(0)
        text = str(dict).replace('\'','\"').replace('False', '0').replace('True', '1')

        f.close()
        f = open(PATH, 'w')
        f.write(text)



    f.close()
    time.sleep(5)