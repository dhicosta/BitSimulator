from DAO.SqliteConnect import PersistenceDbSqlite

class InstrucaoController():
    def __init__(self):
        self.__connectedDbSqlite = PersistenceDbSqlite()
        self.__memoriaprincipal = {"Instrucao": [], "Dado": []}

    def VerificCommandExists(self, NameCommand):
        if len(self.__connectedDbSqlite.GetNameInstruction(NameCommand)) > 0:
            return True
        else:
            print("Comando não encontrado!!!")
            return False
    def AdicionarCommando(self, Commando):
        Data = self.__connectedDbSqlite.GetNameInstruction(Commando)
        self.__memoriaprincipal["Instrucao"] = [Data[1], Data[2], Data[3]]
        print(self.__memoriaprincipal)

ola = InstrucaoController()
ola.AdicionarCommando("LOAD")