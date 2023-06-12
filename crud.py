import sqlite3

conn = sqlite3.connect('db.db')

sql = conn.cursor()

def create(x):
    print(x)
    sql.execute("insert into persons values(?, ?, ?, ?)", x)
    conn.commit()
