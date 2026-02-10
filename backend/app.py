from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import Orcamento
from pydantic import BaseModel
from jinja2 import Template
import pdfkit  # Alternativa se não quiser usar WeasyPrint

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Modelo de dados para entrada
class OrcamentoCreate(BaseModel):
    cliente: str
    servico: str
    valor: float

@app.post("/orcamentos/")
def criar_orcamento(orcamento: OrcamentoCreate, db: Session = Depends(get_db)):
    db_orcamento = Orcamento(**orcamento.dict())
    db.add(db_orcamento)
    db.commit()
    db.refresh(db_orcamento)
    return db_orcamento

@app.get("/orcamentos/")
def listar_orcamentos(db: Session = Depends(get_db)):
    return db.query(Orcamento).all()

@app.get("/orcamentos/{orcamento_id}/pdf")
def gerar_pdf(orcamento_id: int, db: Session = Depends(get_db)):
    orcamento = db.query(Orcamento).filter(Orcamento.id == orcamento_id).first()
    if not orcamento:
        raise HTTPException(status_code=404, detail="Orçamento não encontrado")
    
    template_html = f"""
    <h1>Orçamento</h1>
    <p>Cliente: {orcamento.cliente}</p>
    <p>Serviço: {orcamento.servico}</p>
    <p>Valor: R${orcamento.valor}</p>
    """
    pdfkit.from_string(template_html, f"orcamento_{orcamento_id}.pdf")
    return {"mensagem": f"PDF gerado: orcamento_{orcamento_id}.pdf"}
