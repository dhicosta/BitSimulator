from BitSimulatorDAO.SqliteConnect import PersistenceDbSqlite
from BitSimulatorUtil.InstrucoesUtil import InstrucoesUtil

class InstrucaoController():
    def __init__(self):
        self.__connectedDbSqlite = PersistenceDbSqlite()
        self.__ArqCommand = InstrucoesUtil("Instrucoes")

    def CheckCommandExists(self, NameCommand):
        if len(self.__connectedDbSqlite.GetNameInstruction(NameCommand)) > 0:
            return True
        else:
            return False

    def SetCommandInLineExecution(self, Commando):
        CommandFormat = Commando.split(" ")
        CommandFormat.append("\n")
        self.__ArqCommand.WriteCommandExec(CommandFormat)

    def IsExternCommand(self, Command):
        DataCommand = self.__connectedDbSqlite.GetNameInstruction(Command)
        if((len(DataCommand) > 0) and (DataCommand[0][3] == "EX")):
            return True
        else:
            return False
            
    def ExecuteCommands(self):
        Instrucions = self.__ArqCommand.GetInstrucoesArqu()
        ListInstrucion = Instrucions[0].split("\t")
        if (self.CheckCommandExists(ListInstrucion[0])):
            if (self.IsExternCommand(ListInstrucion[0])):
                return self.ExecuteExterCommand(ListInstrucion[0])
            else:
                return self.ExecuteInternCommand(ListInstrucion)
        else:
            return "Comando n existe"
    
    def ExecuteExterCommand(self, Command):
        return "ola"

    def ExecuteInternCommand(self, ListInstrucions):
        Op = self.__connectedDbSqlite.GetNameInstruction(ListInstrucions[0])
        if Op[0][2] == '-':
            return int(ListInstrucions[1]) - int(ListInstrucions[2][0])
        elif Op[0][2] == '+':
            return int(ListInstrucions[1]) + int(ListInstrucions[2][0])
        elif Op[0][2] == '/':
            return int(ListInstrucions[1]) / int(ListInstrucions[2][0])