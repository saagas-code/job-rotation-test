

export const currency = (value: number, language: string, currency: string) => {
  return value.toLocaleString(language, {style: 'currency', currency: currency})
}