import sqlite3

conn = sqlite3.connect('db.db')

sql = conn.cursor()


def add_person(*args):
    sql.execute("insert into persons values(?, ?, ?, ?)", args)
    conn.commit()


def delete_person(id):
    sql.execute("delete from persons where id=?", id)
    conn.commit()


def promote_person(id, is_promoted):
    sql.execute("update persons set is_promoted=? where id=?", (is_promoted, id))
    conn.commit()
