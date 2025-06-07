from sqlalchemy import Column, Integer, String, DateTime
from db import Base  # Importa o Base do db.py para manter uma instância única

class Animal(Base):
    __tablename__ = 'animal'

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    sexo = Column(Integer)
    raca = Column(Integer)
    data_nascimento = Column(DateTime)
    status = Column(Integer)
