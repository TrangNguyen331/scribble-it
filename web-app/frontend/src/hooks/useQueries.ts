import { useQuery } from "react-query";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 2000,
  headers: {
    'Cache-Control': 'no-cache'
  }
})

export const usePredictDigits = (imageBase64Encode: string) => {
  const formData = new FormData()
  formData.append("image_name", "image_predict.png")
  formData.append("image_base64_encode", imageBase64Encode)

  return AxiosInstance.post("predict_digits", formData)
}

export const usePredictCharacters = () => {

}