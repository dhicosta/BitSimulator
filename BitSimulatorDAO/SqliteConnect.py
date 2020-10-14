import sqlite3
import os

class PersistenceDbSqlite():
    def __init__(self):
        self.__Connection = sqlite3.connect("./BitSimulatorDAO/Database/Instrucoes.db")
        self.__CursorDb = self.__Connection.cursor()
    def CloseConnection(self):
        self.__Connection.close()
    def GetAll(self):
        self.__CursorDb.execute("SELECT * FROM instrucoes")
        DataReturn = self.__CursorDb.fetchall()
        return DataReturn
    def GetNameInstruction(self, Name):
        self.__CursorDb.execute(f"SELECT * FROM Instrucoes WHERE Instrucao='{Name}'")
        DataEspecifiqReturn = self.__CursorDb.fetchall()
        return DataEspecifiqReturn