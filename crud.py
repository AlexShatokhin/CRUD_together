import sqlite3

conn = sqlite3.connect('db.db')

sql = conn.cursor()


def add_person(*args):
    print(args, ' - add')
    sql.execute("insert into persons values(?, ?, ?, ?)", args)
    conn.commit()


def delete_person(id):
    print(id, ' - delete')
    sql.execute("delete from persons where id=?", id)


