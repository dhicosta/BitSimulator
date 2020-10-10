import sqlite3

class PersistenceDbSqlite():
    def __init__(self, NomeBanco):
        self.NomeBanco = NomeBanco
        self.__Connection = sqlite3.connect(f'./Database/{NomeBanco}.db')
        self.__CursorDb = self.__Connection.cursor()

    def CreateDb(self, CommandsCreateDb):
        self.__CursorDb.execute(CommandsCreateDb)
        self.__Connection.close()

StringCreate = """
CREATE TABLE Instrucoes (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        Instrucao TEXT NOT NULL,
        Operando TEXT NOT NULL
);
"""
ola = PersistenceDbSqlite("instrucoes")
ola.CreateDb(StringCreate)