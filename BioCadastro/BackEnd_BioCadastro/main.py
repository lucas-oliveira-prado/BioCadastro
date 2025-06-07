from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import models, schemas, crud
from db import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    return {"message": "API rodando!"}

@app.get("/animals")
def get_animals(db: Session = Depends(get_db)):
    animais = db.query(models.Animal).all()
    return [
        {
            "id": animal.id,
            "nome": animal.nome,
            "sexo": animal.sexo,
            "raca": animal.raca,
            "data_nascimento": animal.data_nascimento,
            "status": animal.status
        }
        for animal in animais
    ]
    





