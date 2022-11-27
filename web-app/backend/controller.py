from fastapi import APIRouter, Form
import numpy as np
import base64
from PIL import Image
import cv2
import re
import io

keras_router = APIRouter(prefix='/api', tags=['Keras'])

""" Endpoint """
@keras_router.post('/predict_digits')
async def predict_digits(
  image_name: str = Form(...),
  image_base64_encode: str = Form(...)
) -> dict:
  image_base64 = image_base64_encode.split(';base64,').pop()
  image_base64_decode = base64.b64decode(image_base64)

  """ Write file """
  try:
    with open(image_name, "wb") as f:
      f.write(image_base64_decode)
  except Exception:
    return {"message": "There was an error uploading the file"}

  return { 
    "file_name": image_name,
    "file_data": image_base64_encode
  }

""" Endpoint """
@keras_router.get('/predict_characters')
async def predict_characters() -> dict:
  return { "value": "One"}


# def decode_base64(data, altchars=b'+/'):
#     """ Decode base64, padding being optional """
#     data = re.sub(rb'[^a-zA-Z0-9%s]+' % altchars, b'', data)  # normalize
#     missing_padding = len(data) % 4
#     if missing_padding:
#         data += b'='* (4 - missing_padding)
#     return base64.b64decode(data, altchars)