import sqlite3

conn = sqlite3.connect('db.db')

sql = conn.cursor()


def add_person(*args):
    print(args)
    sql.execute("insert into persons values(?, ?, ?, ?)", args)
    conn.commit()
