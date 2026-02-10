from sqlalchemy import Column, Integer, String, Float
from database import Base

class Orcamento(Base):
    __tablename__ = "orcamentos"
    id = Column(Integer, primary_key=True, index=True)
    cliente = Column(String, index=True)
    servico = Column(String)
    valor = Column(Float)
