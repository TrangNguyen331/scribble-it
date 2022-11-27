from fastapi import APIRouter, Form
from tensorflow import keras
import numpy as np
import base64
import cv2
import json

model_digits = keras.models.load_model('./model/model_digits.h5')

keras_router = APIRouter(prefix='/api', tags=['Keras'])

""" Endpoint """
@keras_router.post('/predict_digits')
async def predict_digits(
  image_name: str = Form(...),
  image_base64_encode: str = Form(...)
) -> dict:
  """ Predict Pipeline """
  # 🎄 Step 1: Decode chuỗi định dạng base64
  image_base64 = image_base64_encode.split(';base64,').pop()
  image_base64_decode = base64.b64decode(image_base64)

  # 🎄 Step 2: Chuyển định dạng base64 thành hình ảnh opencv
  image_array = np.frombuffer(image_base64_decode, dtype=np.uint8)
  image = cv2.imdecode(image_array, flags=cv2.IMREAD_UNCHANGED)

  # 🎄 Step 3: Thay nền trong suốt -> nền đen
  B, G, R, A = cv2.split(image)
  alpha = A / 255
  R = (255 * (1 - alpha) + R * alpha).astype(np.uint8)
  G = (255 * (1 - alpha) + G * alpha).astype(np.uint8)
  B = (255 * (1 - alpha) + B * alpha).astype(np.uint8)
  image = cv2.merge((B, G, R))
  # image = (255 - image)

  # 🎄 Step 5: Thay đổi màu chữ -> trắng


  # 🎄 Step 4: Resize ảnh thành 28 x 28
  IMG_WIDTH = IMG_HEIGHT = 28
  dim = (IMG_WIDTH, IMG_HEIGHT)
  image = cv2.resize(image, dim, interpolation = cv2.INTER_AREA)

  # 🎄 Step 6: Predict
  cv2.imwrite('{}.png'.format(image_name), image)
  image = np.invert(np.array([image[:,:,0]]))
  prediction = model_digits.predict(image)
  print(prediction)
  print("The number is probably a {}".format(np.argmax(prediction)))

  return { 
    "result_probably": int(np.argmax(prediction)),
    "result_all": json.dumps(prediction.tolist())
  }

""" Endpoint """
@keras_router.get('/predict_characters')
async def predict_characters() -> dict:
  return { "value": "One"}