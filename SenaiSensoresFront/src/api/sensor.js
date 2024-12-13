import api from '../libs/api'

export const uploadCSV = async (table, csvFile) => {
    const formData = new FormData()
    formData.append('table', String(table).toLowerCase())
    formData.append('file', csvFile)

    const { data } = await api.post('upload_csv/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}

export const getSensores = async () => {
    const { data } = await api.get('sensores/')
    return data
}

// Temperatura (TemperaturaDataViewSet)
export const getTemperatura = async () => {
    const { data } = await api.get('temperatura/')
    return data
}

// Umidade (UmidadeDataViewSet)
export const getUmidade = async () => {
    const { data } = await api.get('umidade/')
    return data
}

// Contador (ContadorDataViewSet)
export const getContador = async () => {
    const { data } = await api.get('contador/')
    return data
}

// Luminosidade (LuminosidadeDataViewSet)
export const getLuminosidade = async () => {
    const { data } = await api.get('luminosidade/')
    return data
}