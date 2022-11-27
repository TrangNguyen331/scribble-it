from fastapi import APIRouter

keras_router = APIRouter(prefix='/api', tags=['Keras'])

""" Endpoint """
@keras_router.get('/predict_digits')
async def predict_digits() -> dict:
  return { "value": 1}

""" Endpoint """
@keras_router.get('/predict_characters')
async def predict_characters() -> dict:
  return { "value": "One"}