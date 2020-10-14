class InstrucoesUtil():
	def __init__(self, nomearq):
		self.__nomeArq = nomearq
		self.__LineCommandExect = open(f'C:../BitSimulator/BitSimulatorDAO/Codigo/{self.__nomeArq}.txt', 'w')
		self.__LineCommandExect.close()

	def WriteCommandExec(self, Command):
		Arq = open(f'C:../BitSimulator/BitSimulatorDAO/Codigo/{self.__nomeArq}.txt', 'a')
		Arq.writelines(Command)
		Arq.close()
	def GetInstrucoesArqu(self):
		Arq = open(f'C:../BitSimulator/bitSimulatorDAO/Codigo/{self.__nomeArq}.txt', 'r')
		Datas = Arq.readlines()
		return Datas